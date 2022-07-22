import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Card = styled.TouchableOpacity`
  background-color: #fff;

  margin: 0 10px;

  border-width: 1px;
  border-radius: 10px;
  border-color: #ffff;

  padding: 16px;

  width: 250px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const IconStyled = styled(Icon)`
  background-color: #191641;
  border-radius: 6px;

  margin-right: 15px;

  padding: 10px;
`;

export const TitleStyled = styled.Text`
  font-size: 18px;
  color: black;
  color: #161616;
`;

export const Content = styled.View`
  justify-content: center;
`;
