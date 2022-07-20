import React, { useState } from "react";
import { ToastAndroid } from "react-native";

import uuid from "react-native-uuid";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getRealm } from "../../databases/realm";

import { RootStackParamList } from "routes";

import { outputSchema } from "./utils/schema";
import { validateErrors } from "../../functions/validateErrors";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Textarea } from "../../components/Form/Textarea";
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
    description: string;
  } | null>(null);
  const [fields, setFields] = useState({
    title: "",
    value: "",
    description: "",
    type: "entrada",
  });

  const handleSave = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const errors = await validateErrors(outputSchema, fields);

      if (Object.keys(errors).length > 0) {
        console.log("entrou");

        setErrors({
          ...errors,
          title: errors.title,
          value: errors.value,
          description: errors.description,
        });

        throw new Error(errors);
      }

      const realm = await getRealm();

      const data = {
        _id: uuid.v4(),
        value: fields.value.replace("R$", "").replace(",", "."),
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

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  return (
    <>
      <Header title="Nova Transação" />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#191641" }}>
        <Styled.OutputsContainerInputs>
          <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
            <Input
              placeholder={"Título"}
              value={fields.title}
              onChangeText={(text) => setFields({ ...fields, title: text })}
              keyboardType="default"
              marginBottom="16px"
              error={errors?.title}
            />

            <InputCurrency
              value={fields.value}
              onChangeText={(text) => setFields({ ...fields, value: text })}
              marginBottom="16px"
              error={errors?.value}
            />

            <Textarea
              placeholder={"Descrição"}
              value={fields.description}
              onChangeText={(text) =>
                setFields({ ...fields, description: text })
              }
              marginBottom="16px"
              error={errors?.description}
            />

            <RadioGroup
              checked={fields.type}
              setChecked={(state) => setFields({ ...fields, type: state })}
              marginTop="10px"
            />

            <Button title="Salvar" onPress={handleSave} marginTop="20px">
              Salvar
            </Button>
          </KeyboardAwareScrollView>
        </Styled.OutputsContainerInputs>
      </SafeAreaView>
    </>
  );
};
