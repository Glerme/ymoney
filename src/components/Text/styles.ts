import styled from "styled-components/native";
import { Text as RNBText } from "native-base";

interface TextProps {
  colorTitle?: string;
  fontSize?: string;
}

export const TextStyled = styled(RNBText)<TextProps>`
  color: ${(props) => props.colorTitle || "#161616"};
  font-size: ${(props) => `${props.fontSize}` || "16px"};
`;
