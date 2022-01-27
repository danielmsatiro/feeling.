import { Box, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  return (
    <Box>
      <Text>SignUp</Text>
      <Button onClick={() => history.push("/login")}>Login</Button>
    </Box>
  );
};
