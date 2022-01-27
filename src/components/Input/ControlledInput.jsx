import { FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ControlledInput = ({ error, name, ...rest }) => {
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
        {/* <Text>{value}</Text> */}
        <Input
          name={name}
          // value={value}
          onChange={(event) => setValue(event.target.value)}
          // size="lg"
          h={["50px", "50px", "50px", "60px"]}
          pr="4.5rem"
          bg="yellow.200"
          border="none"
          borderRadius="30px"
          focusBorderColor="orange.500"
          // ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </>
  );
};
