import { Flex, Text, Icon, Tooltip, Box } from "@chakra-ui/react";
import { MdQuestionAnswer, MdOutlineFavorite } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";

export const MyFavPhrase = ({ phrase }) => {
  const { deleteMyFavorite, addMyFavorite } = usePhrases();
  const { user, accessToken } = useAuth();
  const history = useHistory();
  const isFavorite = phrase.users_who_like.some(
    ({ userId }) => userId === user.id
  );

  const handleClick = () => {
    history.push(`/comments/${phrase.id}`);
    // PhraseComments(frase.id);
  };

  const addFav = () => {
    addMyFavorite(phrase.id, user.id, accessToken);
  };

  return (
    <Flex
      key={phrase.id}
      w={["300px", "300px", "300px", "300px"]}
      h="250px"
      maxH="300px"
      bg="yellow.200"
      direction={"column"}
      borderRadius={"20px"}
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        <Tooltip label={phrase.phraseText} placement={"top"}>
          <Text
            fontSize={["md", "lg", "lg", "xl"]}
            fontWeight={"light"}
            lineHeight="30px"
            textAlign={"left"}
            fontStyle={"normal"}
            padding={["10%", "7%", "7%", "6%"]}
            h="145px"
            minH="145px"
            noOfLines={4}
            cursor="pointer"
            _hover={{
              color: "orange.500",
            }}
          >
            {phrase.phraseText}
          </Text>
        </Tooltip>
        <Text
          color="orange.500"
          fontWeight={"500"}
          fontSize={["md", "lg", "lg", "xl"]}
          lineHeight={["40px", "40px", "40px", "54px"]}
          textAlign={"left"}
          paddingBottom={"7%"}
          ml="15px"
          isTruncated
        >
          {phrase.phraseAuthor}
        </Text>
      </Flex>

      <Flex
        bg="yellow.500"
        color="orange.500"
        borderRadius="0 0 20px 20px"
        h="40px"
        minH="40px"
        justifyContent="space-between"
        padding="0 20px"
        alignItems="center"
      >
        {!!isFavorite ? (
          <Tooltip label="Desfavoritar a frase">
            <Box>
              <Icon
                as={MdOutlineFavorite}
                onClick={() => {
                  deleteMyFavorite(phrase.id, user.id, accessToken);
                }}
                fontSize="2xl"
                color="orange.500"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Tooltip>
        ) : (
          <Tooltip label={"Favoritar a frase"}>
            <Box>
              <Icon
                as={MdOutlineFavorite}
                onClick={() => {
                  addFav();
                }}
                fontSize="2xl"
                color="gray.500"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Tooltip>
        )}
        <Tooltip label="Comentários da galera">
          <Box>
            <Icon
              as={MdQuestionAnswer}
              onClick={() => handleClick()}
              fontSize="2xl"
              color="gray.500"
              _hover={{
                cursor: "pointer",
                color: "orange.500",
                transition: "0.3s",
              }}
              css={{
                "&:not(:hover)": {
                  transition: "0.3s",
                },
              }}
            />
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
