import React, {ReactNode} from 'react';
import {ButtonProps} from 'react-native';
import {Button as RNPButton} from 'react-native-paper';

import * as Styled from './styles';
interface Button extends Omit<ButtonProps, 'theme'> {
  theme?: ReactNativePaper.Theme;
  children: ReactNode;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}

export const Button: React.FC<Button> = ({
  children,
  mode = 'contained',
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  onPress,
}) => {
  return (
    <Styled.ButtonContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      <RNPButton onPress={onPress} mode={mode}>
        {children}
      </RNPButton>
    </Styled.ButtonContainer>
  );
};
