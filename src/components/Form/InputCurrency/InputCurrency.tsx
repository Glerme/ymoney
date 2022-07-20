import React from "react";
import { Masks, useMaskedInputProps } from "react-native-mask-input";

import { Input } from "../Input";

import * as Styled from "./styles";

interface InputCurrencyProps {
  value: string;
  onChangeText: (value: string) => void;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  error?: any;
}

export const InputCurrency: React.FC<InputCurrencyProps> = ({
  onChangeText,
  value,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  error,
  ...rest
}) => {
  const maskedInputProps = useMaskedInputProps({
    value,
    onChangeText,
    mask: Masks.BRL_CURRENCY,
  });

  return (
    <Styled.InputContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Input error={error} label="Valor" {...maskedInputProps} {...rest} />
    </Styled.InputContainer>
  );
};
