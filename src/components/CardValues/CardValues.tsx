import React, { memo } from "react";

import { HStack, Spacer, useTheme } from "native-base";

import { Text } from "../Text";
import { CurrencyNumber } from "../CurrencyNumber";

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
        <HStack alignItems="center">
          <Styled.LeftContent>
            <Styled.TitleStyled numberOfLines={1} ellipsizeMode="tail">
              {cardContent.title}
            </Styled.TitleStyled>
            <Text
              textTransform="capitalize"
              color={
                cardContent.type === "entrada"
                  ? colors.green[700]
                  : colors.secondary[700]
              }
            >
              {cardContent.type}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {cardContent.description}
            </Text>
          </Styled.LeftContent>

          <Spacer />

          <Styled.Value backgroundColor={cardContent.type}>
            <CurrencyNumber numberValue={cardContent.value} />
          </Styled.Value>
        </HStack>
      </Styled.Content>
    </Styled.Card>
  );
};
