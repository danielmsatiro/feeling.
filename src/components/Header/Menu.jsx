import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import { useAuth } from "../../provider/AuthContext";
import { MdComment, MdHomeFilled, MdOutlineFavorite } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";

export const Menu = ({ isOpen, onClose }) => {
  const sizeIcon = 25;
  const colorIcon = "yellow.500";
  const { signOut } = useAuth();
  const history = useHistory();

  const location = useLocation();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        background="yellow.200"
        ml="auto"
        mr="20px"
        mt="80px"
        w={"50px"}
      >
        <DrawerBody>
          <VStack>
            <Tooltip label="Motive-se com esta frase">
              <Center
                color={colorIcon}
                _hover={{
                  color: "orange.500",
                }}
                onClick={() => history.push("/dashboard")}
                as="button"
              >
                <MdHomeFilled size={sizeIcon} />
              </Center>
            </Tooltip>
            <Tooltip label="Suas favoritas">
              <Center
                color={colorIcon}
                _hover={{
                  color: "orange.500",
                }}
                onClick={() => history.push("/favorites")}
                as="button"
              >
                <MdOutlineFavorite size={sizeIcon} />
              </Center>
            </Tooltip>
            <Tooltip label="Seus comentários">
              <Center
                color={colorIcon}
                _hover={{
                  color: "orange.500",
                }}
                onClick={() => history.push("/mycomments")}
                as="button"
              >
                <MdComment size={sizeIcon} />
              </Center>
            </Tooltip>
            {location.pathname !== "/phrases" && (
              <Tooltip label="Pesquise por uma frase ou autor">
                <Center
                  display={location.pathname === "/phrases" && "none"}
                  onClick={() => history.push("/phrases")}
                  as="button"
                  color={colorIcon}
                  _hover={{
                    color: "orange.500",
                  }}
                >
                  <FaSearch size={sizeIcon} />
                </Center>
              </Tooltip>
            )}
            <Tooltip label="Sair">
              <Center
                color={colorIcon}
                _hover={{
                  color: "orange.500",
                }}
                ml="auto"
                onClick={signOut}
                as="button"
                fontSize="2rem"
              >
                <FaPowerOff size={sizeIcon} />
              </Center>
            </Tooltip>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
