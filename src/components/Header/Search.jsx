import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";
import { motion } from "framer-motion";
import {FaSearch} from "react-icons/fa"

const InputMotion = motion(Input)

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
      <InputGroup
        mr={5}
        as="form"
        alignItems={"center"}
        onSubmit={handleSubmit(handleSearch)}
      >
        <InputLeftElement 
          color="yellow.500" 
          h="30px"
        >
          <FaSearch size={20} />
        </InputLeftElement>
        <InputMotion
          pl="16%"
          animate={{
            width:[0, 200],
            opacity:[0.3, 1]
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
          initial={{
            width: 0 
          }}
          bg="yellow.50"
          focusBorderColor="orange.500"
          borderRadius="10px"
          borderColor="yellow.500"
          _hover={{
            borderColor: "yellow.500"
          }}
          h="30px"
          {...register("content")}
        />
      </InputGroup>
    </>
  );
};
