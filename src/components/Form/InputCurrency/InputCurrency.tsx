import React from "react";

import { FormControl } from "native-base";
import { TextInputMask } from "react-native-masked-text";

import { Input } from "../Input";

interface InputCurrencyProps {
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
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={isInvalid}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <TextInputMask
        type="money"
        options={{
          maskType: "BRL",
          precision: 2,
          separator: ",",
          delimiter: ".",
          unit: "R$",
          suffixUnit: "",
        }}
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={value}
        placeholder="R$"
        customTextInput={Input}
      />

      {isInvalid && (
        <FormControl.ErrorMessage mt="1">
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
