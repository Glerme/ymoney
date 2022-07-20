import React from "react";

import NumberFormat from "react-number-format";

import { Text } from "../../components/Text";

interface CurrencyNumberProps {
  numberValue: string | number;
  color?: string;
  fontSize?: string;
}

export const CurrencyNumber: React.FC<CurrencyNumberProps> = ({
  numberValue,
  color,
  fontSize,
}) => {
  return (
    <NumberFormat
      value={Number(numberValue)}
      decimalSeparator=","
      thousandSeparator={"."}
      displayType={"text"}
      prefix={"R$"}
      renderText={(formattedValue) => (
        <Text color={color} fontSize={fontSize}>
          {formattedValue}
        </Text>
      )}
      lang="pt-BR"
    />
  );
};
