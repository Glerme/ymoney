import styled from "styled-components/native";
import { Heading as RNBHeading } from "native-base";

interface TitleProps {
  colorTitle?: string;
  fontSize?: string;
}

export const TitleStyled = styled(RNBHeading)<TitleProps>`
  color: ${(props) => props.colorTitle || "#161616"};
  font-size: ${(props) => `${props.fontSize}` || "16px"};
  font-weight: 700;
`;
