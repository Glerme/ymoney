import styled from "styled-components/native";
import { Pressable, Box } from "native-base";

interface CardProps {
  backgroundColor: string;
}

export const Card = styled(Pressable)<CardProps>`
  background: white;

  border-left-width: 8px;
  border-left-color: ${(props) =>
    props.backgroundColor === "saida" ? "red" : "green"};

  border-radius: 4px;

  padding: 16px;
  margin-bottom: 16px;
`;

export const Content = styled(Box)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContent = styled.View`
  max-width: 200px;
`;

export const TitleStyled = styled.Text`
  font-size: 20px;

  text-transform: capitalize;

  color: #010101;
`;

export const Value = styled.Text<CardProps>`
  font-size: 20px;

  color: ${(props) =>
    props.backgroundColor === "Despesas" ? "red" : "green"}; ;
`;
