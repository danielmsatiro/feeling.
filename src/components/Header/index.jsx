import { Center, Flex, Tooltip, useDisclosure } from "@chakra-ui/react";
import {
  MdComment,
  MdHomeFilled,
  MdOutlineFavorite,
  MdOutlineMenu,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { FaSearch, FaPowerOff } from "react-icons/fa";

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
          <Tooltip label="Motive-se com esta frase...">
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
          </Tooltip>
          <Tooltip label="Suas favoritas">
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
          </Tooltip>
          <Tooltip label="Seus comentários">
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
          </Tooltip>
          {location.pathname === "/phrases" ? (
            <Center>
              <Search />
            </Center>
          ) : (
            <Tooltip label="Pesquise por frase ou autor">
              <Center
                display={location.pathname === "/phrases" && "none"}
                onClick={() => history.push("/phrases")}
                as="button"
                color={colorIcon}
                _hover={{
                  color: "orange.500",
                }}
              >
                <FaSearch size={20} />
              </Center>
            </Tooltip>
          )}
        </Flex>
        <Center display={["flex", "none"]} gap={3}>
          {location.pathname === "/phrases" && <Search />}
        </Center>
        <Tooltip label="Sair">
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
            <FaPowerOff size={20} />
          </Center>
        </Tooltip>
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
          sx={{
            zindex: 5,
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
