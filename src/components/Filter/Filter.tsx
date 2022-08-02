import React from "react";

import { useTheme } from "native-base";

import { Text } from "../Text";
import { Button } from "../Form/Button";

interface Filter {
  title: string;
  isActive?: boolean;
  type: "entrada" | "saida";
  onPress: () => void;
}

export const Filter: React.FC<Filter> = ({
  title,
  type,
  isActive = false,
  onPress,
}) => {
  const { colors } = useTheme();

  const colorType = type === "entrada" ? colors.green[500] : colors.red[500];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="warmGray.900"
      flex={1}
      size="sm"
      onPress={onPress}
      height={10}
    >
      <Text
        color={isActive ? colorType : colors.gray[200]}
        textTransform="uppercase"
      >
        {title}
      </Text>
    </Button>
  );
};
