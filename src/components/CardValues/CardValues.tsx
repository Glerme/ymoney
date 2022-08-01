import React from "react";
import { View } from "react-native";

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
  return (
    <Styled.Card backgroundColor={cardContent.type} onPress={onPress}>
      <Styled.Content>
        <View>
          <Styled.TitleStyled numberOfLines={1} ellipsizeMode="tail">
            {cardContent.title}
          </Styled.TitleStyled>
          <Text>{cardContent.type}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {cardContent.description}
          </Text>
        </View>

        <View>
          <Styled.Value backgroundColor={cardContent.type}>
            <CurrencyNumber numberValue={cardContent.value} />
          </Styled.Value>
        </View>
      </Styled.Content>
    </Styled.Card>
  );
};
