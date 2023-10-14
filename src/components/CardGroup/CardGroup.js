import { Box, Text, Icon, HStack, Button, Spacer, Center } from "@chakra-ui/react";
import { format } from 'date-fns';


const Card = ({ title, subTitle, date }) => {
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
            <Text color="white" fontSize="xl" mt={4}>
              {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : ''}
            </Text>
          </HStack>
          : <></>
      }
    </Box>
  );
};

export default Card;

