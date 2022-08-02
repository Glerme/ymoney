import React from "react";

import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface InputProps extends IInputProps {
  onChangeText: (value: string) => void;
  value: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  error?: any;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
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
      <NativeBaseInput
        bg="gray.100"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="gray.800"
        placeholderTextColor="gray.300"
        _focus={{
          borderWidth: 1,
          borderColor: "primary.700",
          bg: "gray.100",
        }}
        onChangeText={onChangeText}
        value={value}
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
