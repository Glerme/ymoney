import React, { ReactNode } from "react";

import { ITextProps } from "native-base";

import * as Styled from "./styles";

interface TextProps extends ITextProps {
  color?: string;
  fontSize?: string;
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({
  children,
  color,
  fontSize,
  ...rest
}) => {
  return (
    <Styled.TextStyled colorTitle={color} fontSize={fontSize} {...rest}>
      {children}
    </Styled.TextStyled>
  );
};
