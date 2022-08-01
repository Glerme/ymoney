import { ReactNode } from "react";
import { Button as NativeBaseButton, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  onPress?: () => void;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  onPress,
  children,
  ...rest
}) => {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      onPress={onPress}
      {...rest}
    >
      {children}
    </NativeBaseButton>
  );
};
