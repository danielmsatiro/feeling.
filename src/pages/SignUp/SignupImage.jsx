import { Box, Image } from "@chakra-ui/react";
import ballet from "../../assets/ballet.svg";
export const SignupImage = () => {
  return (
    <Box display={["none", "none", "block", "block"]}>
      <Image
        src={ballet}
        alt="dancing"
        h="auto"
        w={["0", "0", "350px", "400px"]}
      />
    </Box>
  );
};
