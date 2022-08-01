import React from "react";
import { ToastAndroid, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../../routes/app.routes";

import { useGetDetails } from "../../hooks/useGetDetails";

import { getRealm } from "../../databases/realm";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { CurrencyNumber } from "../../components/CurrencyNumber";

import * as Styled from "./styles";

type DetailsScreenProps = StackNavigationProp<RootStackParamList, "Detalhes">;

type DetailsScreenParamsProps = RouteProp<RootStackParamList, "Detalhes">;

export const Details: React.FC = () => {
  const navigate = useNavigation<DetailsScreenProps>();
  const route = useRoute<DetailsScreenParamsProps>();

  const { data, error, loading } = useGetDetails(route?.params.outputId || "");

  const handleRemoveOutput = async (outputId: string) => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        const oneOutput = realm
          .objects("Output")
          .filtered(`_id == '${outputId}'`);

        realm.delete(oneOutput[0]);

        ToastAndroid.show("Transação apagada com sucesso", 1000);

        navigate.navigate("Home");
      });
    } catch (error) {
      console.error(error);

      ToastAndroid.show("Ocorreu um erro para apagar a transação", 2000);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="#191641" />

      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title="Detalhes"
          action={
            <Pressable onPress={() => handleRemoveOutput(data!._id)}>
              <Icon as={FontAwesome} name="trash-o" size={18} color="#fff" />
            </Pressable>
          }
        />

        <Styled.Container>
          <Styled.TitleContainer>
            <Title fontSize="26px" color="#fff">
              {data?.title}
            </Title>
            <CurrencyNumber
              fontSize="48px"
              color="#fff"
              numberValue={data?.value || 0}
            />
          </Styled.TitleContainer>

          <Styled.DetailsContainer>
            <Text
              style={{ fontWeight: "700" }}
              fontSize="16px"
              color={data?.type === "entrada" ? "green" : "red"}
            >
              {data?.type.toUpperCase()}
            </Text>

            <Text fontSize="16px">{data?.description}</Text>
          </Styled.DetailsContainer>
        </Styled.Container>
      </SafeAreaView>
    </>
  );
};
