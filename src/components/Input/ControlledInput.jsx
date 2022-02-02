import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";

const ControlledInput = ({ error, name, register, ...rest }, ref) => {
  const [value, setValue] = useState("");

  return (
    <>
      <FormControl
        isInvalid={error ? true : false}
        h={["80px"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <InputGroup flexDirection="column">
          <Input
            name={name}
            defaultValue={value}
            onChangeCapture={(event) => setValue(event.target.value)}
            pr="4.5rem"
            bg="yellow.200"
            border="solid 2px"
            borderColor="yellow.200"
            color="black"
            borderRadius="12px"
            fontSize="sm"
            focusBorderColor="yellow.500"
            _placeholder={{ color: "black" }}
            css={{
              "&:focus::placeholder": {
                opacity: 0,
                transform: "translateX(5px)",
                transition: "0.5s",
              },
            }}
            ref={ref}
            {...rest}
            {...register(name)}
          />
          <FormErrorMessage fontSize="xs" fontWeight="medium" m="10px 0">
            {error}
          </FormErrorMessage>
        </InputGroup>
      </FormControl>
    </>
  );
};
export const Entrada = forwardRef(ControlledInput);
