import {
  Center,
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  theme,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

export const Search = () => {
  return (
    <>
      <InputGroup
        mr={5}
        as="form"
        alignItems={"center"} /* onSubmit={handleSubmit(handleSearch)} */
      >
        <InputLeftElement color={theme.colors.yellow[500]} h="30px">
          <MdOutlineSearch size={25} />
        </InputLeftElement>
        <Input
          focusBorderColor={theme.colors.orange[500]}
          borderRadius="10px"
          h="30px"
        />
      </InputGroup>
    </>
  );
};
