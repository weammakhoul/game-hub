import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
