import React, { ReactNode } from "react";
import { IHeadingProps } from "native-base";

import * as Styled from "./styles";

interface TitleProps extends IHeadingProps {
  color?: string;
  fontSize?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  children,
  color,
  fontSize,
  ...rest
}) => {
  return (
    <Styled.TitleStyled colorTitle={color} fontSize={fontSize} {...rest}>
      {children}
    </Styled.TitleStyled>
  );
};
