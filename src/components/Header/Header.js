// src/Header.js
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box p={4} boxShadow="base">
      <Flex align="center">
        <Image align="left" src="/logo.png" alt="Logo da Empresa" w="50px" h="50px" />
        <Spacer />
        <Link align="rigth"  as={RouterLink} to="/profile">
          <IconButton
            aria-label="Perfil"
            icon={<ExternalLinkIcon />}
            variant="ghost"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
