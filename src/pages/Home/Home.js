import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import CardSeat from "../../components/CardSeat/CardSeat";
import CardGroup from "../../components/CardGroup/CardGroup";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import CardFeedBack from "../../components/CardFeedBack/CardFeedBack";

const cardsData = [
  {
    seat: {
      date: new Date(),
      location: "Brazil, Vila Velha, ES",
      confirmation: true,
    },
    group: {
      date: new Date(),
      location: "Brazil, Vila Velha, ES",
      confirmation: true,
    },
    restaurant: {
      date: new Date(),
      location: "Brazil, Vila Velha, ES",
      confirmation: false,
    },
    feedback: {
      date: new Date(),
      location: "Brazil, Vila Velha, ES",
      confirmation: false,
    },
  },

];

const Home = () => {

  return (
    <Box backgroundColor="black">
      <Container maxW="container.lg" mt={8}>
        <SimpleGrid columns={1} spacing={8}>
          {cardsData.map((card, index) => {

            const seat = card.seat && card.seat.confirmation ? <CardSeat key={index}
              title='Seu asento está confirmado'
              subTitle=''
              date={card.seat.date}
              location={card.seat.location}
              confirmation={card.seat.confirmation}
            /> : <CardSeat key={index}
              title='Confirme seu asento'
              date={card.seat.date}
              location={card.seat.location}
              confirmation={card.seat.confirmation}
            />;

            const group = card.group && card.group.confirmation ?
              <CardGroup key={index}
                title='Sua composição do grupo'
                subTitle=''
                date={card.seat.date}
                location={card.seat.location}
                confirmation={card.seat.confirmation}
              /> : <CardGroup key={index}
                title='Sua composição do grupo'
                subTitle='Saiba mais em'
                date={card.seat.date}
                location={card.seat.location}
                confirmation={card.seat.confirmation}
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
