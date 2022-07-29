import { Button as NativeBaseButton, Heading, IButtonProps } from "native-base";

import * as Styled from "./styles";

interface ButtonProps extends IButtonProps {
  title: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}

export const Button: React.FC<ButtonProps> = ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  title,
  onPress,
  ...rest
}) => {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
};
