import React, { useState } from "react";
import { ToastAndroid } from "react-native";

import uuid from "react-native-uuid";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getRealm } from "../../databases/realm";

import { RootStackParamList } from "../../routes/app.routes";

import { outputSchema } from "./utils/schema";
import { validateErrors } from "../../functions/validateErrors";
import { formatCurrencyToUs } from "../../functions/formatCurrencyToUs";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { RadioGroup } from "../../components/Form/RadioGroup";
import { InputCurrency } from "../../components/Form/InputCurrency";

import * as Styled from "./styles";

type OutputsScreenProps = StackNavigationProp<RootStackParamList, "Outputs">;

export const Outputs: React.FC = () => {
  const navigation = useNavigation<OutputsScreenProps>();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    title: string;
    value: string;
  } | null>(null);

  const [fields, setFields] = useState({
    title: "",
    value: "",
    description: "",
    type: "entrada",
  });

  const handleSubmit = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const errors = await validateErrors(outputSchema, {
        title: fields.title,
        value: fields.value,
      });

      if (Object.keys(errors).length > 0) {
        setErrors({
          ...errors,
          title: errors.title,
          value: errors.value,
          description: errors.description,
        });

        return;
      }

      const realm = await getRealm();

      const data = {
        _id: uuid.v4(),
        value: formatCurrencyToUs(fields.value),
        title: fields.title,
        description: fields.description,
        type: fields.type,
        createdAt: new Date(),
      };

      realm.write(() => {
        realm.create("Output", data);
      });

      ToastAndroid.show("Transação salva com sucesso", 1000);

      navigation.navigate("Home");
    } catch (error) {
      ToastAndroid.show("Ocorreu um erro para salvar a transação", 2000);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="#191641" />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#191641" }}>
        <Header title="Nova Transação" />

        <Styled.OutputsContainerInputs>
          <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
            <Input
              placeholder={"Título"}
              value={fields.title}
              onChangeText={(text) => setFields({ ...fields, title: text })}
              keyboardType="default"
              marginBottom="10px"
              error={errors?.title}
              isInvalid={!!errors?.title}
              isRequired
              errorMessage={errors?.title}
            />

            <InputCurrency
              value={fields.value}
              onChangeText={(text) => setFields({ ...fields, value: text })}
              marginBottom="10px"
              isInvalid={!!errors?.value}
              isRequired
              errorMessage={errors?.value}
            />

            <Input
              placeholder={"Descrição"}
              value={fields.description}
              onChangeText={(text) =>
                setFields({ ...fields, description: text })
              }
              marginBottom="16px"
              multiline
              h={24}
              textAlignVertical="top"
            />

            <RadioGroup
              checked={fields.type}
              setChecked={(state) => setFields({ ...fields, type: state })}
              marginTop="10px"
            />

            <Button onPress={handleSubmit} marginTop="20px" isLoading={loading}>
              Salvar
            </Button>
          </KeyboardAwareScrollView>
        </Styled.OutputsContainerInputs>
      </SafeAreaView>
    </>
  );
};
