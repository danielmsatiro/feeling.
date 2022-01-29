import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

const ControlledInput = ({ error, name, ...rest }, ref) => {
  const [value, setValue] = useState("");

  return (
    <>
      <FormControl
        isInvalid={!!error}
        h={["80px"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <Input
          name={name}
          defaultValue={value}
          onChangeCapture={(event) => setValue(event.target.value)}
          h="30px"
          pr="4.5rem"
          bg="yellow.200"
          border="solid 2px"
          borderColor="yellow.200"
          borderRadius="12px"
          focusBorderColor="orange.500"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </>
  );
};
export const Entrada = forwardRef(ControlledInput);
