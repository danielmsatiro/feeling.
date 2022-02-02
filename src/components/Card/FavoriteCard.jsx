import { Box, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";

export const FavoriteCard = ({ phrase }) => {
  return (
    <Box
      key={phrase.id}
      w={["85%", "400px", "401px", "504px"]}
      h={["100%", "100%", "100%", "100%"]}
      bg="yellow.200"
      direction={"row"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      borderRadius={"20px"}
    >
      <Flex justify={"flex-end"} margin={"10px 10px 0 0"}>
        <Tooltip label="Comentários da galera" placement="bottom">
          <IconButton
            bg={"transparent"}
            w={["30px", "35px", "40px", "40px"]}
            h={["30px", "35px", "40px", "40px"]}
            color="orange.500"
            icon={<MdQuestionAnswer size="100%" />}
            aria-label="Ver Comentários"
            onClick={() => {
              /*abre os comentários*/
            }}
          />
        </Tooltip>
      </Flex>
      <Text
        colorScheme={""}
        fontSize={["2xl", "3xl", "3xl", "4xl"]}
        fontWeight={"300"}
        fontFamily={"Poppins"}
        lineHeight={["40px", "40px", "40px", "54px"]}
        textAlign={"center"}
        fontStyle={"normal"}
        padding={["10%", "7%", "7%", "6%"]}
      >
        <Box>{phrase.phraseText}</Box>
      </Text>
      <Text
        color="orange.500"
        fontWeight={"500"}
        fontSize={["2xl", "3xl", "3xl", "4xl"]}
        lineHeight={["40px", "40px", "40px", "54px"]}
        textAlign={"center"}
        paddingBottom={"7%"}
      >
        <Box>{phrase.phraseAuthor}</Box>
      </Text>
    </Box>
  );
};
