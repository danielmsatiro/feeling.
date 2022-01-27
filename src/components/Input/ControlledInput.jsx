import { FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

const ControlledInput = ({ error, name, ...rest }, ref) => {
  const [value, setValue] = useState("");
  // const [status, setStatus] = useState("default");
  // const handleChange = (event) => setValue(event.target.value);
  // useEffect(() => {
  //   if (error) {
  //     return setStatus("error");
  //   }
  // }, [error]);

  // const handleInputFocus = useCallback(() => {
  //   if (!error) {
  //     setStatus("focus");
  //   }
  // }, [error]);

  // const handleInputBlur = useCallback(() => {
  //   if (value.length > 1 && !error) {
  //     return setStatus("filled");
  //   }
  // }, [error, value]);

  // console.log(value);

  return (
    <>
      <FormControl
        isInvalid={!!error}
        h={["80px"]}
        display={["flex"]}
        alignItems={["center"]}
      >
        <Input
          name={name}
          onChangeCapture={(event) => setValue(event.target.value)}
          h={["50px", "50px", "50px", "60px"]}
          pr="4.5rem"
          bg="yellow.200"
          border="none"
          borderRadius="30px"
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
