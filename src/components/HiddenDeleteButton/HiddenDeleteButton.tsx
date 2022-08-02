import React from "react";

import { Pressable, VStack, Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

interface HiddenDeleteButtonProps {
  onClick: () => Promise<void>;
}

export const HiddenDeleteButton: React.FC<HiddenDeleteButtonProps> = ({
  onClick,
}) => {
  return (
    <S.Container>
      <Pressable
        ml="auto"
        mb="10"
        w="70"
        h="full"
        bg="red.500"
        justifyContent="center"
        borderRadius={4}
        onPress={onClick}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={FontAwesome} name="trash-o" size={"lg"} color="#fff" />
        </VStack>
      </Pressable>
    </S.Container>
  );
};
