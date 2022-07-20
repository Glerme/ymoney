import React, {ReactNode} from 'react';

import {View, Modal as RNModal, ModalProps} from 'react-native';

interface ModalComponentProps extends ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalComponentProps> = ({children, ...rest}) => {
  return (
    <RNModal transparent animationType="slide" statusBarTranslucent {...rest}>
      <View>
        <View>
          <View>
            <View>
              <View />

              {children}
            </View>
          </View>
        </View>
      </View>
    </RNModal>
  );
};
