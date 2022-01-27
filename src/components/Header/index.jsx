import { Center, Flex, theme, useDisclosure } from "@chakra-ui/react";
import {
  MdComment,
  MdHomeFilled,
  MdOutlineFavorite,
  MdOutlineMenu,
  MdOutlinePowerSettingsNew,
  MdOutlineSearch,
  MdOutlineZoomOut,
  MdQuestionAnswer,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";
import { Menu } from "./Menu";

export const Header = () => {
  const sizeIcon = 25;
  const colorIcon = theme.colors.yellow[500];
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { signOut } = useAuth();

  const history = useHistory();

  return (
    <Flex paddingX="8" paddingY="2" background={theme.colors.yellow[200]}>
      <Flex display={["none", "flex"]} gap={3}>
        <Center onClick={() => history.push("/dashboard")} as="button">
          <MdHomeFilled color={colorIcon} size={sizeIcon} />
        </Center>
        <Center onClick={() => history.push("/favorites")} as="button">
          <MdOutlineFavorite color={colorIcon} size={sizeIcon} />
        </Center>
        <Center onClick={() => history.push("/comments")} as="button">
          <MdComment color={colorIcon} size={sizeIcon} />
        </Center>
        <Center onClick={() => history.push("/phrases")} as="button">
          <MdOutlineSearch color={colorIcon} size={sizeIcon} />
        </Center>
      </Flex>
      <Center
        ml="auto"
        onClick={signOut}
        as="button"
        fontSize="2rem"
        display={["none", "flex"]}
      >
        <MdOutlinePowerSettingsNew color={colorIcon} size={sizeIcon} />
      </Center>
      <Center
        ml="auto"
        onClick={onToggle}
        as="button"
        fontSize="2rem"
        display={["flex", "none"]}
      >
        <MdOutlineMenu color={colorIcon} size={sizeIcon} />
      </Center>
      {/* <Menu isOpen={isOpen} onClose={onClose} /> */}
    </Flex>
  );
};
