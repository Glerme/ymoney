import React from 'react';

import * as Styled from './styles';

interface ActionBottomButtonProps {
  onPress: () => void;
}

export const ActionBottomButton: React.FC<ActionBottomButtonProps> = ({
  onPress,
}) => {
  return (
    <Styled.ActionBottomButtonStyled
      icon={'plus'}
      label={'Label'}
      extended={false}
      onPress={onPress}
      visible={true}
      animateFrom={'right'}
      iconMode={'static'}
      color={'#00565b'}
    />
  );
};
