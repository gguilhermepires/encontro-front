import { Box, Text, Icon, HStack, Button, Spacer, Center } from "@chakra-ui/react";
import { format } from 'date-fns';
import { CalendarIcon } from '@chakra-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, subTitle, date, location, confirmation }) => {
  const btCancelSeat = () => {
    console.log('line 12');

  }
  const btConfirmSeat = () => {
    console.log('line 13');
  }
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4}>
      <Text color="white" fontWeight="bold" fontSize="xl" mt={4}>
        {title}
      </Text>
      <Text color="white" fontSize="xl" mt={4}>
        {subTitle}
      </Text>
      {
        date ?
          <HStack spacing={2}>
            <Icon color="white" as={CalendarIcon} w={6} h={6} marginRight="10px" />
            <Text color="white" fontSize="xl" mt={4}>
              {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : ''}
            </Text>
          </HStack>
          : <></>
      }

      {
        location ?
          <HStack spacing={2}>
            <Icon as={FontAwesomeIcon} icon={faMapMarkerAlt} w={6} h={6} style={{ filter: 'brightness(0) invert(1)' }} />
            <Text color="white" fontSize="xl" mt={4}>
              {location}
            </Text>
          </HStack>
          : <></>
      }

      {
        confirmation ? <HStack>
          <Spacer />
          <Button colorScheme="teal" size="lg" onClick={() => btCancelSeat()}>
            Cancelar
          </Button>
        </HStack> : <Center>
          <Button colorScheme="red" size="lg" onClick={() => btConfirmSeat()}>
            Confirmar
          </Button>
        </Center>
      }

    </Box>
  );
};

export default Card;

