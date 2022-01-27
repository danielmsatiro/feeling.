import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

export const PasswordInput = ({
  placeholder,
  error,
  name,
  register,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = (event) => setValue(event.target.value);

  return (
    <FormControl
      isInvalid={!!error}
      h={["80px"]}
      display={["flex"]}
      alignItems={["center"]}
    >
      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          name={name}
          type={show ? "text" : "password"}
          value={value}
          bg="yellow.200"
          border="none"
          borderRadius="30px"
          placeholder={placeholder}
          onChange={handleChange}
          focusBorderColor="orange.500"
          register={register}
          {...rest}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
