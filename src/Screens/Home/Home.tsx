import React, { useCallback, useState } from "react";
import { ToastAndroid, View } from "react-native";

import LottieView from "lottie-react-native";
import { VStack, FlatList, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../../routes/app.routes";

import { useGetAllMoney } from "../../hooks/useGetAllMoney";

import { parsedCardsItems } from "../../functions/parsedCardsItems";

import { getRealm } from "../../databases/realm";

import { Text } from "../../components/Text";
import { Filter } from "../../components/Filter";
import { Loading } from "../../components/Loading";
import { CardValues } from "../../components/CardValues";
import { DashboardCard } from "../../components/DashboardCard";
import { HiddenDeleteButton } from "../../components/HiddenDeleteButton";
import { ActionBottomButton } from "../../components/ActionBottomButton";

import * as Styled from "./styles";

type HomeScreenProps = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
  const [statusSelected, setStatusSelected] = useState<"entrada" | "saida">(
    "entrada"
  );
  const { data, error, loading, refetch } = useGetAllMoney();

  const { items, totalValues } = parsedCardsItems(data);

  const navigation = useNavigation<HomeScreenProps>();

  const handleSetEntrada = useCallback(() => {
    setStatusSelected("entrada");
  }, []);

  const handleSetSaida = useCallback(() => {
    setStatusSelected("saida");
  }, []);

  const handleRemoveOutput = async (outputId: string) => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        const oneOutput = realm
          .objects("Output")
          .filtered(`_id == '${outputId}'`);

        realm.delete(oneOutput[0]);

        ToastAndroid.show("Transação apagada com sucesso", 1000);

        refetch();
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
      <SafeAreaView style={{ flex: 1 }}>
        <VStack flex={1} bg="#191641" padding={"2"}>
          <HStack space={3} mt={8}>
            <FlatList
              data={totalValues}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <DashboardCard
                  key={item.id}
                  title={item.title}
                  value={item.value || 0}
                  iconName={item.icon}
                />
              )}
            />
          </HStack>

          <HStack space={3} mt={8} mb={6}>
            <Filter
              title="Entradas"
              type="entrada"
              onPress={handleSetEntrada}
              isActive={statusSelected === "entrada"}
            />

            <Filter
              title="Saídas"
              type="saida"
              onPress={handleSetSaida}
              isActive={statusSelected === "saida"}
            />
          </HStack>

          {data.length > 0 ? (
            items.onlyEntradas.length > 0 &&
            items.onlyEntradas[0].type === statusSelected ? (
              <SwipeListView
                data={items.onlyEntradas}
                renderItem={(data) => (
                  <CardValues
                    cardContent={data.item}
                    onPress={() =>
                      navigation.navigate("Detalhes", {
                        outputId: data.item._id,
                      })
                    }
                  />
                )}
                renderHiddenItem={(data) => (
                  <HiddenDeleteButton
                    onClick={() => handleRemoveOutput(data.item._id)}
                  />
                )}
                disableRightSwipe
                rightOpenValue={-65}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={1000}
                useNativeDriver={false}
              />
            ) : items.onlySaidas.length > 0 &&
              items.onlySaidas[0].type === statusSelected ? (
              <SwipeListView
                data={items.onlySaidas}
                renderItem={(data) => (
                  <CardValues
                    cardContent={data.item}
                    onPress={() =>
                      navigation.navigate("Detalhes", {
                        outputId: data.item._id,
                      })
                    }
                  />
                )}
                renderHiddenItem={(data) => (
                  <HiddenDeleteButton
                    onClick={() => handleRemoveOutput(data.item._id)}
                  />
                )}
                disableRightSwipe
                rightOpenValue={-70}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={1000}
                useNativeDriver={false}
              />
            ) : (
              <Styled.EmptyContainer>
                <LottieView
                  source={require("../../assets/empty.json")}
                  autoPlay
                  loop={true}
                />
              </Styled.EmptyContainer>
            )
          ) : (
            <Styled.EmptyContainer>
              <LottieView
                source={require("../../assets/empty.json")}
                autoPlay
                loop={true}
              />
            </Styled.EmptyContainer>
          )}

          <ActionBottomButton onPress={() => navigation.navigate("Outputs")} />
        </VStack>
      </SafeAreaView>
    </>
  );
};
