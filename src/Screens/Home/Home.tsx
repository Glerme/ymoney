import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { VStack, FlatList } from "native-base";

import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../../routes/app.routes";

import { useGetAllMoney } from "../../hooks/useGetAllMoney";

import { parsedCardsItems } from "../../functions/parsedCardsItems";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { CardValues } from "../../components/CardValues";
import { DashboardCard } from "../../components/DashboardCard";
import { ActionBottomButton } from "../../components/ActionBottomButton";

import * as Styled from "./styles";

type HomeScreenProps = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
  const { data, error, loading } = useGetAllMoney();

  const parsedCardItems = parsedCardsItems(data);

  const navigation = useNavigation<HomeScreenProps>();

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} pb={6} bg="gray.700">
        <Title color="#fff" fontSize="20px">
          Dashboard
        </Title>

        <Styled.GridDashboardCards>
          <FlatList
            data={parsedCardItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <DashboardCard
                key={item.id}
                title={item.title}
                value={item.value || 0}
                iconName="credit-card"
              />
            )}
          />
        </Styled.GridDashboardCards>

        {data.length > 0 ? (
          <FlatList
            data={data}
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
        )}

        <ActionBottomButton onPress={() => navigation.navigate("Outputs")} />
      </VStack>
    </SafeAreaView>
  );
};
