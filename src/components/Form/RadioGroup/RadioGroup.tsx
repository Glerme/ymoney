import { Radio } from "native-base";
import React from "react";

import { RadioButton as RNPRadioButton } from "react-native-paper";

import * as Styled from "./styles";

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
      marginTop={marginTop}
    >
      <Styled.TextStyled>Entrada / Saída</Styled.TextStyled>

      <Radio.Group
        name="outputs"
        accessibilityLabel="entrada/saida"
        value={checked}
        onChange={(nextValue) => {
          setChecked(nextValue);
        }}
        p="3"
      >
        <Radio value="entrada" my={1}>
          Entrada
        </Radio>
        <Radio value="saida" my={1}>
          Saída
        </Radio>
      </Radio.Group>
    </Styled.RadioGroupContainer>
  );
};
