import React from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const cardsData = [
  {
    imageUrl: "/card1.png",
    title: "Card 1",
    description: "Descrição do Card 1",
  },
  {
    imageUrl: "/card2.png",
    title: "Card 2",
    description: "Descrição do Card 2",
  },
  {
    imageUrl: "/card3.png",
    title: "Card 3",
    description: "Descrição do Card 3",
  },
];

const Home = () => {
  return (
    <Box>
      <Header />
      <Container maxW="container.lg" mt={8}>
        <SimpleGrid columns={1} spacing={8}>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
