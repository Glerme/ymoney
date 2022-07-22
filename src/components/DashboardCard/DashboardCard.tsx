import React from "react";

import { CurrencyNumber } from "../../components/CurrencyNumber";

import * as Styled from "./styles";

interface DashboardCardProps {
  title: string;
  value: string | number;
  onPress?: () => void;
  iconName: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  iconName,
  onPress,
}) => {
  return (
    <Styled.Card onPress={onPress}>
      <Styled.CardRow>
        <Styled.IconStyled name={iconName} size={20} color="#fff" />
        <Styled.TitleStyled>{title}</Styled.TitleStyled>
      </Styled.CardRow>

      <Styled.Content>
        <CurrencyNumber numberValue={value} fontSize="30px" color="#161616" />
      </Styled.Content>
    </Styled.Card>
  );
};
