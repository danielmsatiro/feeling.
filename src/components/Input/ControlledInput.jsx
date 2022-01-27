import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react";

export const ControlledInput = ({
  placeholder,
  error,
  name,
  register,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <FormControl
      isInvalid={!!error}
      h={["80px"]}
      display={["flex"]}
      alignItems={["center"]}
    >
      <Input
        name={name}
        value={value}
        onChange={handleChange}
        size="lg"
        pr="4.5rem"
        placeholder={placeholder}
        bg="yellow.200"
        border="none"
        borderRadius="30px"
        focusBorderColor="orange.500"
        register={register}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
