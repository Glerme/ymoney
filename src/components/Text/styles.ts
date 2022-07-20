import styled from 'styled-components/native';
import {Text as RNPText} from 'react-native-paper';

interface TextProps {
  colorTitle?: string;
  fontSize?: string;
}

export const TextStyled = styled(RNPText)<TextProps>`
  color: ${props => props.colorTitle || '#161616'};
  font-size: ${props => `${props.fontSize}` || '16px'};
`;
