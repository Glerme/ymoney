import React from 'react';

import {KeyboardTypeOptions} from 'react-native';

import {TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

import * as Styled from './styles';

interface InputProps extends Omit<TextInputProps, 'theme'> {
  theme?: ReactNativePaper.Theme;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  label?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  error?: any;
}

export const Input: React.FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  label,
  keyboardType,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  error,
  theme,
  ...rest
}) => {
  return (
    <Styled.InputContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        label={label}
        placeholder={placeholder}
        keyboardType={keyboardType}
        error={error}
        theme={theme}
        {...rest}
      />
    </Styled.InputContainer>
  );
};
