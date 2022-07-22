import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BorderlessButton} from 'react-native-gesture-handler';

import * as Styled from './styles';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({title, action}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Styled.Container>
      <BorderlessButton onPress={handleGoBack}>
        <View style={{padding: 8}}>
          <Icon name="arrow-left" size={18} color="#fff" />
        </View>
      </BorderlessButton>

      <Styled.TitleContainer>{title}</Styled.TitleContainer>

      {action ? <View>{action}</View> : <View style={{width: 24}} />}
    </Styled.Container>
  );
};
