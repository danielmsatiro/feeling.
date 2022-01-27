import {Flex, Heading, Text, Image, Button} from "@chakra-ui/react"
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md"

import loving from "../../assets/loving.svg"
import clumsy from "../../assets/clumsy.svg"
import coffee from "../../assets/coffee.svg"

export const HomeTop = () => {
    return (
        <Flex flexDirection="column">
            <Flex 
                bg="yellow.50" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center"
                minH="100vh" 
                padding="35px"
                w="100%"
            >
                <Heading 
                    color="orange.500" 
                    as="h1" size="2xl" 
                    fontWeight="medium"
                > 
                    feeling. 
                </Heading>
                <Image src={loving} alt="loving guy" boxSize={["250px", "350px"]}/>

                <Heading 
                    color="orange.500" 
                    as="h2" size='xl' 
                    fontWeight="medium"
                >
                    Bem Vindo(a)!
                </Heading>

                <Text m="10px" textAlign="center" fontWeight="thin">
                    Lorem ipsulum dolum met isse <br/>aham dat mar
                </Text>

                <Button 
                    m="10px"
                    display="flex"
                    justifyContent="space-between"
                    padding="0px 25px"
                    bg="orange.500" 
                    color="white"
                    borderRadius="12px"
                    border="solid"
                    borderColor="orange.500"
                    h="30px"
                    w="200px"
                    fontWeight="medium"
                    _hover={{
                        background: "yellow.50",
                        color: "orange.500",
                        border: "solid orange.500" 
                      }}
                >
                    login 
                    <MdOutlineKeyboardArrowRight size="1.5rem"/>
                </Button>

                <Button 
                    m="10px"
                    display="flex"
                    justifyContent="space-between"
                    padding="0px 25px"
                    bg="orange.500" 
                    color="white"
                    borderRadius="12px"
                    border="solid"
                    borderColor="orange.500"
                    h="30px"
                    w="200px"
                    fontWeight="medium"
                    _hover={{
                        background: "yellow.50",
                        color: "orange.500",
                        border: "solid orange.500" 
                      }}
                >
                    <MdOutlineKeyboardArrowLeft size="1.5rem"/>
                    cadastro
                </Button>

            </Flex>
                
            <Flex
                bg="red.50" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center"
                h="100vh" 
                padding="35px"
                w="100%"
            >

                <Image src={clumsy} alt="loving guy" boxSize={["250px", "350px"]}/>

                <Flex 
                    w={["80%", "60%"]}
                    flexDirection={["column", "column", "row"]}
                    alignItems={["flex-start" , "flex-start" , "center"]}
                    maxW="500px"
                >
                    <Heading
                        w={["100%", "100%", "50%"]}
                        mr="25px"
                        mb="20px"
                    >
                        A vida <br/> 
                        nem sempre é 
                        <Text as="abbr" color="orange.500"> fácil...</Text>
                    </Heading>

                    <Text w={["100%", "100%", "50%"]}> 
                        Sabemos que a vida  pode oferecer dificuldades em certos momentos. 
                        Encontre aqui <Text as="abbr" color="orange.500">um jeito novo de se motivar</Text> e vencer seus desafios!
                    </Text>
                </Flex>
            </Flex>

            <Flex
                bg="white" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="space-around"
                h="100vh" 
                padding="35px"
                w="100%"
            >
                <Flex 
                    maxW="600px" 
                    justifyContent="space-between" 
                    flexDirection={["column", "row"]}
                >
                    <Flex flexDirection="column" w={["100%","50%"]}>
                        <Heading mb="15px">Quem Somos?</Heading>
                        <Text>
                        <Text as="abbr" color="orange.500">feeling. </Text> 
                        é uma plataforma dedicada a deixar sua vida um pouco mais leve. 
                        Aqui você encontra motivação extra para seu dia a dia, através de citações de autores 
                        conhecidos ou não.
                        </Text>
                    </Flex>

                    <Flex 
                       flexDirection="column"
                       justifyContent="space-between"
                       bg="yellow.50"  
                       padding="20px 30px"
                       w={["100%","40%"]}
                       mt={["20px", "0px"]}
                       borderRadius="15px"
                    >
                        <Text mb="10px">
                            Loss is nothing else but change,
                            and change is Natures delight.
                        </Text>
                        <Text color="orange.500" fontWeight="medium">Marcus Aurelius</Text>
                    </Flex>

                </Flex>

                <Image src={coffee} alt="man coffee" mt="25px"/>

            </Flex>
        </Flex>
    )
}