import { Center, Flex, useDisclosure } from "@chakra-ui/react";
import {
  MdComment,
  MdHomeFilled,
  MdOutlineFavorite,
  MdOutlineMenu,
  MdOutlinePowerSettingsNew,
  MdOutlineSearch,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";
import { Menu } from "./Menu";
import { Search } from "./Search";

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { signOut } = useAuth();

  const sizeIcon = 25;
  const colorIcon = "yellow.500";

  const history = useHistory();

  const location = useLocation();

  return (
    <>
      <Flex
        position={"fixed"}
        top={0}
        left={0}
        zIndex={2}
        // overflow={"visible"}
        w={"100%"}
        paddingX="8"
        h="60px"
        background="yellow.200"
      >
        <Flex display={["none", "flex"]} gap={3}>
          <Center
            color={colorIcon}
            onClick={() => history.push("/dashboard")}
            as="button"
            _hover={{
              color: "orange.500",
            }}
          >
            <MdHomeFilled size={sizeIcon} />
          </Center>
          <Center
            color={colorIcon}
            onClick={() => history.push("/favorites")}
            as="button"
            _hover={{
              color: "orange.500",
            }}
          >
            <MdOutlineFavorite size={sizeIcon} />
          </Center>
          <Center
            color={colorIcon}
            onClick={() => history.push("/mycomments")}
            as="button"
            _hover={{
              color: "orange.500",
            }}
          >
            <MdComment size={sizeIcon} />
          </Center>
          {location.pathname === "/phrases" ? (
            <Center>
              <Search />
            </Center>
          ) : (
            <Center
              display={location.pathname === "/phrases" && "none"}
              onClick={() => history.push("/phrases")}
              as="button"
              color={colorIcon}
              _hover={{
                color: "orange.500",
              }}
            >
              <MdOutlineSearch size={sizeIcon} />
            </Center>
          )}
        </Flex>
        <Center display={["flex", "none"]} gap={3}>
          {location.pathname === "/phrases" && <Search />}
        </Center>
        <Center
          ml="auto"
          onClick={signOut}
          as="button"
          fontSize="2rem"
          display={["none", "flex"]}
          color={colorIcon}
          _hover={{
            color: "orange.500",
          }}
        >
          <MdOutlinePowerSettingsNew size={sizeIcon} />
        </Center>
        <Center
          ml="auto"
          onClick={onToggle}
          as="button"
          fontSize="2rem"
          display={["flex", "none"]}
          color={colorIcon}
          _hover={{
            color: "orange.500",
          }}
        >
          <MdOutlineMenu size={sizeIcon} />
        </Center>
        <Menu isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Flex h="60px" />
    </>
  );
};
