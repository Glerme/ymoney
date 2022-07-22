import {Text} from 'components/Text';
import React from 'react';

import {RadioButton as RNPRadioButton} from 'react-native-paper';

import * as Styled from './styles';

interface RadioGroupProps {
  checked: string;
  setChecked: (value: string) => void;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  checked,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  setChecked,
}) => {
  return (
    <Styled.RadioGroupContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      <Styled.TextStyled>Entrada / Saída</Styled.TextStyled>

      <RNPRadioButton.Group
        onValueChange={value => setChecked(value)}
        value={checked}>
        <RNPRadioButton.Item label="Entradas" value="entrada" color="#191641" />
        <RNPRadioButton.Item label="Saídas" value="saida" color="#191641" />
      </RNPRadioButton.Group>
    </Styled.RadioGroupContainer>
  );
};
