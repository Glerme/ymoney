import React from "react";
import { View } from "react-native";

import { useTheme } from "native-base";

import { Text } from "../../components/Text";
import { CurrencyNumber } from "../../components/CurrencyNumber";

import * as Styled from "./styles";

interface CardProps {
  cardContent: {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    type: string;
    value: string;
  };
  onPress: () => void;
}

export const CardValues: React.FC<CardProps> = ({ cardContent, onPress }) => {
  const { colors } = useTheme();

  return (
    <Styled.Card backgroundColor={cardContent.type} onPress={onPress}>
      <Styled.Content>
        <Styled.LeftContent>
          <Styled.TitleStyled numberOfLines={1} ellipsizeMode="tail">
            {cardContent.title}
          </Styled.TitleStyled>
          <Text
            textTransform="capitalize"
            color={
              cardContent.type === "entrada"
                ? colors.green[500]
                : colors.red[500]
            }
          >
            {cardContent.type}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {cardContent.description}
          </Text>
        </Styled.LeftContent>

        <View>
          <Styled.Value backgroundColor={cardContent.type}>
            <CurrencyNumber numberValue={cardContent.value} />
          </Styled.Value>
        </View>
      </Styled.Content>
    </Styled.Card>
  );
};
