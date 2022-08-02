import React from "react";

import { Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

interface ActionBottomButtonProps {
  onPress: () => void;
}

export const ActionBottomButton: React.FC<ActionBottomButtonProps> = ({
  onPress,
}) => {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
      onPress={onPress}
    />
  );
};
