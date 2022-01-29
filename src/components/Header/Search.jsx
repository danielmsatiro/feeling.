import { Input, InputGroup, InputLeftElement, theme } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";

export const Search = () => {
  const { searchPhrase } = usePhrases();

  const handleSearch = ({ content }) => {
    console.log(content);
    searchPhrase();
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <InputGroup
        mr={5}
        as="form"
        alignItems={"center"}
        onSubmit={handleSubmit(handleSearch)}
      >
        <InputLeftElement color={theme.colors.yellow[500]} h="30px">
          <MdOutlineSearch size={25} />
        </InputLeftElement>
        <Input
          focusBorderColor={theme.colors.orange[500]}
          borderRadius="10px"
          h="30px"
          {...register("content")}
        />
      </InputGroup>
    </>
  );
};
