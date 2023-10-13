import { Icon, Stack, Text, Link } from '@chakra-ui/react';
import {
  MdOutlineImportContacts,
  MdOutlineAutoStories,
  MdOutlinePeopleOutline,
} from 'react-icons/md';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function SideMenu() {
  const { pathname } = useLocation();

  const menuItems = [
    {
      title: 'Programmes',
      route: '/programmes',
      icon: MdOutlineImportContacts,
    },
    {
      title: 'Courses',
      route: '/courses',
      icon: MdOutlineAutoStories,
    },
    {
      title: 'Cohorts',
      route: '/cohorts',
      icon: MdOutlinePeopleOutline,
    },
  ];

  return (
    <Stack
      spacing="0"
      w="10rem"
      h="calc(100vh - 5rem)"
      borderRightWidth="1px"
      borderRightColor="grey.200"
      left="0"
      bg="white"
    >
      {menuItems.map((item) => (
        <Link
          as={RouterLink}
          to={item.route}
          key={item.title}
          display="flex"
          padding="0.8rem 1.5rem"
          backgroundColor={pathname.includes(item.route) ? 'grey.300' : 'white'}
          _focus={{ outline: 'none' }}
          _active={{ backgroundColor: 'blue.300' }}
          _hover={{
            backgroundColor: pathname.includes(item.route)
              ? 'grey.300'
              : 'grey.300',
            cursor: 'pointer',
          }}
          transition="all 0.15s"
        >
          <Icon
            as={item.icon}
            color={pathname.includes(item.route) ? 'green.01' : 'blue.02'}
            boxSize="1.4rem"
          />
          <Text
            fontSize="xs"
            fontWeight="bold"
            color={pathname.includes(item.route) ? 'green.01' : 'blue.02'}
            ml="1rem"
          >
            {item.title}
          </Text>
        </Link>
      ))}
    </Stack>
  );
}

export default SideMenu;
