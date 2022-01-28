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
        mt="60px"
        w={"50px"}
      >
        <DrawerBody>
          <VStack>
            <Center onClick={() => history.push("/dashboard")} as="button">
              <MdHomeFilled color={colorIcon} size={sizeIcon} />
            </Center>
            <Center onClick={() => history.push("/favorites")} as="button">
              <MdOutlineFavorite color={colorIcon} size={sizeIcon} />
            </Center>
            <Center onClick={() => history.push("/comments")} as="button">
              <MdComment color={colorIcon} size={sizeIcon} />
            </Center>
            {location.pathname !== "/phrases" && (
              <Center
                display={location.pathname === "/phrases" && "none"}
                onClick={() => history.push("/phrases")}
                as="button"
              >
                <MdOutlineSearch color={colorIcon} size={sizeIcon} />
              </Center>
            )}
            <Center ml="auto" onClick={signOut} as="button" fontSize="2rem">
              <MdOutlinePowerSettingsNew color={colorIcon} size={sizeIcon} />
            </Center>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
