import { Box, Image } from "@chakra-ui/react";
import dancing from "../../assets/dancing.svg";
export const LoginImage = () => {
  return (
    <Box display={["none", "none", "block", "block"]}>
      <Image
        src={dancing}
        alt="dancing"
        h="auto"
        w={["0", "0", "400px", "800px"]}
      />
    </Box>
  );
};
