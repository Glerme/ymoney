import React from "react";
import MaskInput, { Masks, useMaskedInputProps } from "react-native-mask-input";

import { Input } from "../Input";
import { FormControl, IInputProps } from "native-base";

interface InputCurrencyProps extends IInputProps {
  value: string;
  onChangeText: (value: string) => void;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const InputCurrency: React.FC<InputCurrencyProps> = ({
  onChangeText,
  value,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  isRequired,
  isInvalid,
  errorMessage,
  ...rest
}) => {
  const maskedInputProps = useMaskedInputProps({
    value,
    onChangeText,
    mask: Masks.BRL_CURRENCY,
  });

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={isInvalid}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Input
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={value}
        placeholder="R$"
        {...rest}
      />

      {isInvalid && (
        <FormControl.ErrorMessage mt="1">
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
