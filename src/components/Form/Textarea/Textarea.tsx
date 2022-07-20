import React from 'react';

import {TextInput} from 'react-native-paper';

import * as Styled from './styles';

interface TextareaProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  error?: any;
}

export const Textarea: React.FC<TextareaProps> = ({
  onChangeText,
  value,
  placeholder,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  error,
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
        label={placeholder}
        placeholder={placeholder}
        multiline
        numberOfLines={4}
        error={error}
        {...rest}
      />
    </Styled.InputContainer>
  );
};
