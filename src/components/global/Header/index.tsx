import { Flex, HStack, Image, Link, Text } from '@chakra-ui/react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import logo from '../../../assets/schola-logo2.jpeg';
import { useAuth } from '../../../contexts/AuthProvider';
import { UserType } from '../../../types/auth';
import Profile from './Profile';
interface IMenuItem {
  title: string,
  route: string,
}
function Header() {
  const { pathname } = useLocation();

  const { user } = useAuth();

  const menuItems: IMenuItem[]= [];

  return (
    <Flex
      as="header"
      justify="center"
      h="5rem"
      w="100%"
      bgColor="white.01"
      borderBottomWidth="1px"
      borderBottomColor="grey.03"
    >
      <Flex
        justify="space-between"
        w={[
          '30rem',
          '35rem',
          '40rem',
          '45rem',
          '50rem',
          '55rem',
          '60rem',
          '65rem',
          '70rem',
          '75rem',
          '75rem',
          '75rem',
          '80rem',
          '85rem',
        ]}
      >
        <Flex overflow="hidden">
          <Image
            alignSelf="center"
            mb="0.5rem"
            src={logo}
            alt="Logo"
            w="140px"
            h="auto"
            objectFit="cover"
          />
          {user?.roles[0] === UserType.CLIENT ? (
            <HStack
              spacing="0.5rem"
              ml="1.25rem"
              alignSelf="flex-end"
              h="4.5rem"
              left="0"
              bg="white"
            >
              {menuItems.map((item: IMenuItem) => (
                <Link
                  role="group"
                  as={RouterLink}
                  to={item.route}
                  key={item.title}
                  display="flex"
                  alignItems="center"
                  h="2.5rem"
                  padding="0.8rem 1.5rem"
                  borderRadius="md"
                  _focus={{ outline: 'none' }}
                  _active={{ backgroundColor: 'grey.03' }}
                  _hover={{
                    backgroundColor: 'white.02',
                    cursor: 'pointer',
                  }}
                  transition="all 0.15s"
                >
                  <Text
                    fontSize="xs"
                    fontWeight={
                      pathname.includes(item.route) ? 'medium' : 'normal'
                    }
                    color={
                      pathname.includes(item.route) ? 'green.01' : 'blue.01'
                    }
                  >
                    {item.title}
                  </Text>
                </Link>
              ))}
            </HStack>
          ) : null}
        </Flex>
        <Profile />
      </Flex>
    </Flex>
  );
}

export default Header;
