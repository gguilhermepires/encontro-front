import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import CardSeat from "../../components/CardSeat/CardSeat";
import CardGroup from "../../components/CardGroup/CardGroup";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import CardFeedBack from "../../components/CardFeedBack/CardFeedBack";
import { useAuth } from '../../contexts/AuthProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';

// const cardsData = [
  //   {
  //     seat: {
  //       date: new Date(),
  //       location: "Brazil, Vila Velha, ES",
  //       confirmation: false,
  //     },
  //     group: {
  //       date: new Date(),
  //       location: "Brazil, Vila Velha, ES",
  //       confirmation: true,
  //     },
  //     restaurant: {
  //       date: new Date(),
  //       location: "Brazil, Vila Velha, ES",
  //       confirmation: false,
  //     },
  //     feedback: {
  //       date: new Date(),
  //       location: "Brazil, Vila Velha, ES",
  //       confirmation: false,
  //     },
  //   },

// ];

interface CardData {
  id: string;
  seat: {
    id: string;
    date: Date;
    location: string;
    confirmation: boolean;
  };
  group: {
    id: string;
    date: Date;
    location: string;
    confirmation: boolean;
  };
  restaurant: {
    id: string;
    date: Date;
    location: string;
    confirmation: boolean;
  };
  feedback: {
    id: string;
    date: Date;
    location: string;
    confirmation: boolean;
  };
}


const Home = () => {
  const { accessToken } = useAuth();
  const [cardsData, setCardsData] = useState<CardData[] | []>([]);

  useEffect(() => {
    const fetchCardsData = async (accessToken: string) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/event/first`,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200 && response.data.code === 200) {
          setCardsData(response.data.data); // Assuming the response data structure matches your card data
        }
      } catch (error) {
        setCardsData([
          {
            id:'teste',
            seat: {
              id:'teste',
              date: new Date(),
              location: "Brazil, Vila Velha, ES",
              confirmation: false,
            },
            group: {
              id:'teste',
              date: new Date(),
              location: "Brazil, Vila Velha, ES",
              confirmation: true,
            },
            restaurant: {
              id:'teste',
              date: new Date(),
              location: "Brazil, Vila Velha, ES",
              confirmation: false,
            },
            feedback: {
              id:'teste',
              date: new Date(),
              location: "Brazil, Vila Velha, ES",
              confirmation: false,
            },
          }
        ])
      }
    }

    fetchCardsData(accessToken);
  }, cardsData);

  return (
    <Box backgroundColor="black">
      <Container maxW="container.lg" mt={8}>
        <SimpleGrid columns={1} spacing={8}>
          {cardsData.map((card: any, index: number) => {

            const seat = card.seat && card.seat.confirmation ? <CardSeat  key={card.id}
              title='Seu asento está confirmado'
              subTitle=''
              date={card.seat.date}
              location={card.seat.location}
              confirmation={card.seat.confirmation}
            /> : <CardSeat key={card.id}
              title='Confirme seu asento'
              date={card.seat.date}
              location={card.seat.location}
              confirmation={card.seat.confirmation}
              subTitle={''}
            />;

            const group = card.group && card.group.confirmation ?
              <CardGroup key={index}
                title='Sua composição do grupo'
                subTitle=''
                date={card.seat.date}
              /> : <CardGroup key={index}
                title='Sua composição do grupo'
                subTitle='Saiba mais em'
                date={card.seat.date}
              />;


            const restaurant = card.restaurant && card.restaurant.confirmation ?
              <CardRestaurant key={index}
                title='Seu restaurante'
                subTitle=''
                date={card.restaurant.date}
                location={card.restaurant.location}
                confirmation={card.restaurant.confirmation}
              /> : <CardRestaurant key={index}
                title='Seu restaurante'
                subTitle='Saiba mais em'
                date={card.restaurant.date}
                location={card.restaurant.location}
                confirmation={card.restaurant.confirmation}
              />;

            const feedback = card.group && card.group.confirmation ?
              <CardFeedBack key={index}
                title='Seu feedback'
                subTitle='Saiba mais em'
                date={card.feedback.date}
                confirmation={card.feedback.confirmation}
                location={''}
              /> : <CardFeedBack key={index}
                title='Seu feedback'
                subTitle='Saiba mais em'
                date={card.feedback.date}
                location={card.feedback.location}
                confirmation={card.feedback.confirmation}
              />;

            return <>
              {seat}
              {group}
              {restaurant}
              {feedback}
            </>
          }

          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
