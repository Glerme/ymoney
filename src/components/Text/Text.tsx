import React, {ReactNode} from 'react';
import {TextProps} from 'react-native';

import * as Styled from './styles';

interface TextProp extends TextProps {
  color?: string;
  fontSize?: string;
  children: ReactNode;
}

export const Text: React.FC<TextProp> = ({
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
