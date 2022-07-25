import styled from "styled-components/native";

interface CardProps {
  backgroundColor: string;
}

export const Card = styled.TouchableOpacity<CardProps>`
  background: white;

  border-left-width: 8px;
  border-left-color: ${(props) =>
    props.backgroundColor === "saida" ? "red" : "green"};

  border-radius: 4px;

  max-height: 100px;

  padding: 16px;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
