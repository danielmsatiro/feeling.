import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../provider/AuthContext";
import { FiLogOut } from "react-icons/fi";
import {
  MdComment,
  MdHomeFilled,
  MdOutlineFavorite,
  MdOutlinePowerSettingsNew,
  MdOutlineSearch,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Menu = ({ isOpen, onClose }) => {
  const sizeIcon = 25;
  const colorIcon = theme.colors.yellow[500];
  const { user, signOut } = useAuth();
  const history = useHistory();

  const location = useLocation();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        background={theme.colors.yellow[200]}
        ml="auto"
        mr="20px"
        mt="80px"
        w={"50px"}
      >
        <DrawerBody>
          <VStack>
            <Center
              color={colorIcon}
              _hover={{
                color: theme.colors.orange[500],
              }}
              onClick={() => history.push("/dashboard")}
              as="button"
            >
              <MdHomeFilled size={sizeIcon} />
            </Center>
            <Center
              color={colorIcon}
              _hover={{
                color: theme.colors.orange[500],
              }}
              onClick={() => history.push("/favorites")}
              as="button"
            >
              <MdOutlineFavorite size={sizeIcon} />
            </Center>
            <Center
              color={colorIcon}
              _hover={{
                color: theme.colors.orange[500],
              }}
              onClick={() => history.push("/comments")}
              as="button"
            >
              <MdComment size={sizeIcon} />
            </Center>
            {location.pathname !== "/phrases" && (
              <Center
                display={location.pathname === "/phrases" && "none"}
                onClick={() => history.push("/phrases")}
                as="button"
                color={colorIcon}
                _hover={{
                  color: theme.colors.orange[500],
                }}
              >
                <MdOutlineSearch size={sizeIcon} />
              </Center>
            )}
            <Center
              color={colorIcon}
              _hover={{
                color: theme.colors.orange[500],
              }}
              ml="auto"
              onClick={signOut}
              as="button"
              fontSize="2rem"
            >
              <MdOutlinePowerSettingsNew size={sizeIcon} />
            </Center>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
