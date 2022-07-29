import React, { ReactNode } from "react";
import { View } from "react-native";

import { Pressable, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as Styled from "./styles";

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, action }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Styled.Container>
        <Pressable onPress={handleGoBack}>
          <View style={{ padding: 8 }}>
            <Icon as={AntDesign} name="arrowleft" size={18} color="#fff" />
          </View>
        </Pressable>

        <Styled.TitleContainer>{title}</Styled.TitleContainer>

        {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
      </Styled.Container>
    </>
  );
};
