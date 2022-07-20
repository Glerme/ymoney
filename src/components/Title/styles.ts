import styled from 'styled-components/native';

import {Title as RNPTitle} from 'react-native-paper';

interface Title {
  colorTitle?: string;
  fontSize?: string;
}

export const TitleStyled = styled(RNPTitle)<Title>`
  color: ${props => props.colorTitle || '#161616'};
  font-size: ${props => `${props.fontSize}` || '16px'};
  font-weight: 700;
`;
