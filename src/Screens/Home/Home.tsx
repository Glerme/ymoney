import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { VStack, FlatList, HStack } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../../routes/app.routes";

import { useGetAllMoney } from "../../hooks/useGetAllMoney";

import { parsedCardsItems } from "../../functions/parsedCardsItems";

import { Text } from "../../components/Text";
import { Filter } from "../../components/Filter";
import { Loading } from "../../components/Loading";
import { CardValues } from "../../components/CardValues";
import { DashboardCard } from "../../components/DashboardCard";
import { ActionBottomButton } from "../../components/ActionBottomButton";

import * as Styled from "./styles";

type HomeScreenProps = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
  const [statusSelected, setStatusSelected] = useState<"entrada" | "saida">(
    "entrada"
  );
  const { data, error, loading } = useGetAllMoney();

  const { items, totalValues } = parsedCardsItems(data);

  const navigation = useNavigation<HomeScreenProps>();

  const handleSetEntrada = useCallback(() => {
    setStatusSelected("entrada");
  }, []);

  const handleSetSaida = useCallback(() => {
    setStatusSelected("saida");
  }, []);

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
              <FlatList
                data={items.onlyEntradas}
                renderItem={({ item, index }) => (
                  <CardValues
                    key={index}
                    cardContent={item}
                    onPress={() =>
                      navigation.navigate("Detalhes", {
                        outputId: item._id,
                      })
                    }
                  />
                )}
                keyExtractor={(item) => item._id}
              />
            ) : items.onlySaidas.length > 0 &&
              items.onlySaidas[0].type === statusSelected ? (
              <FlatList
                data={items.onlySaidas}
                renderItem={({ item, index }) => (
                  <CardValues
                    key={index}
                    cardContent={item}
                    onPress={() =>
                      navigation.navigate("Detalhes", {
                        outputId: item._id,
                      })
                    }
                  />
                )}
                keyExtractor={(item) => item._id}
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
