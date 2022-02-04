import { Input, InputGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePhrases } from "../../provider/PhrasesContext";

export const Search = () => {
  const { searchPhrase, loadPhrases } = usePhrases();

  /* Ciclo de vida de desmontagem ao sair da página de pesquisa */
  useEffect(() => {
    return () => loadPhrases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = ({ content }) => {
    searchPhrase(content);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <InputGroup mr={5} as="form" onSubmit={handleSubmit(handleSearch)}>
        <Input
          bg="yellow.50"
          focusBorderColor="orange.500"
          borderRadius="10px"
          borderColor="yellow.500"
          _hover={{
            borderColor: "yellow.500",
          }}
          h="30px"
          {...register("content")}
        />
      </InputGroup>
    </>
  );
};
