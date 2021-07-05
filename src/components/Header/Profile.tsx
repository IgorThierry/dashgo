import {
  Avatar,
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { RiLogoutBoxLine, RiProfileLine } from 'react-icons/ri';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Thierry</Text>
          <Text color="gray.300" fontSize="small">
            igorthierry15@gmail.com
          </Text>
        </Box>
      )}

      <Menu autoSelect={false} colorScheme="pink" placement="bottom-end">
        <MenuButton borderRadius="full">
          <Avatar
            size="md"
            name="Igor Thierry"
            src="https://github.com/IgorThierry.png"
          />
        </MenuButton>
        <MenuList bg="gray.700">
          <MenuItem
            _hover={{ bgColor: 'pink.600' }}
            _focus={{ bg: 'pink.500' }}
            icon={<RiProfileLine />}
          >
            Perfil
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: 'pink.600' }}
            _focus={{ bg: 'pink.500' }}
            icon={<RiLogoutBoxLine />}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
