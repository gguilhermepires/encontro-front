import { Flex, Text } from '@chakra-ui/react';

// import { useAuth } from '../../contexts/AuthContext';

interface Props {
  sticky?: boolean;
}

function Version({ sticky = false }: Props) {
  // const { version } = useAuth();
  const version = {
    application: 1
  };

  if (sticky) {
    return (
      <Flex pt="3rem" pb="1rem" mt="auto" w="133.5rem">
        <Flex position="sticky" left="50%" transform="translateX(-50%)">
          <Text fontSize="sm">
            Schola {version.application} © {new Date().getFullYear()} EDHEC
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex justify="center" py="2rem" mt="auto">
      <Text fontSize="sm">
        Schola {version.application} © {new Date().getFullYear()} EDHEC
      </Text>
    </Flex>
  );
}

export default Version;
