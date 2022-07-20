import React, {ReactNode} from 'react';

import * as Styled from './styles';

interface TitleProps {
  color?: string;
  fontSize?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({children, color, fontSize}) => {
  return (
    <Styled.TitleStyled colorTitle={color} fontSize={fontSize}>
      {children}
    </Styled.TitleStyled>
  );
};
