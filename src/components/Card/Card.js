// src/Card.js
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4}>
      <Image src={imageUrl} alt={title} />
      <Text fontSize="xl" mt={4}>
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default Card;
