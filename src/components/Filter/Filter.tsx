import React from "react";

import { Text } from "../Text";
import { Button } from "../Form/Button";

interface Filter {
  title: string;
  isActive?: boolean;
  type: "open" | "closed";
}

export const Filter: React.FC<Filter> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  return (
    <></>
    // <Button
    //   // borderWidth={isActive ? 1 : 0}
    //   // borderColor={colorType}
    //   {...rest}
    //   title=""
    // >
    //   <Text
    //     // color={isActive ? colorType : "gray.300"}
    //     fontSize="xs"
    //   >
    //     {title}
    //   </Text>
    // </Button>
  );
};
