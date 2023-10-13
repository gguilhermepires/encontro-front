import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown, MdLogout } from 'react-icons/md';
import { User } from '../../../../types/auth';
import { stringToHslColor } from '../../../../utils/colors';
import { firstLetterUppercase } from '../../../../utils/strings';

interface Props {
  onOpenLogoutModal: () => void;
  user: User;
}

function OptionsMenu({ user, onOpenLogoutModal }: Props) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        aria-label="Open profile"
        h="4rem"
        w="4rem"
      >
        <Flex align="center" justify="center">
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            src=""
            color={stringToHslColor(
              `${user.firstName} ${user.lastName}`,
              35,
              45
            )}
            backgroundColor={stringToHslColor(
              `${user.firstName} ${user.lastName}`
            )}
            boxSize="3rem"
          />
          <Icon
            as={MdKeyboardArrowDown}
            color="blue.400"
            boxSize="1.3rem"
            position="absolute"
            borderRadius="full"
            borderWidth="1px"
            borderColor="grey.200"
            bg="white"
            boxShadow="sm"
            bottom="0.25rem"
            right="0.25rem"
          />
        </Flex>
      </MenuButton>
      <MenuList py="0">
        <Flex py="0.75rem" px="0.75rem" align="center">
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            src=""
            color={stringToHslColor(
              `${user.firstName} ${user.lastName}`,
              35,
              45
            )}
            backgroundColor={stringToHslColor(
              `${user.firstName} ${user.lastName}`
            )}
            boxSize="2.1rem"
            size="sm"
          />
          <Flex direction="column" ml="0.5rem">
            <Text fontSize="sm">
              {user.firstName} {user.lastName}
            </Text>
            <Text fontSize="xs" fontFamily="label" color="grey.01">
              {firstLetterUppercase(user.roles[0])}
            </Text>
          </Flex>
        </Flex>
        <MenuItem
          h="3rem"
          tabIndex={-1}
          _hover={{
            backgroundColor: 'grey.300',
          }}
          onClick={onOpenLogoutModal}
        >
          <Icon as={MdLogout} color="green.01" boxSize="1.2rem" />
          <Text ml="0.5rem">Leave</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default OptionsMenu;
