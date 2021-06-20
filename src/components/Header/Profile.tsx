import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

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

      <Avatar
        size="md"
        name="Igor Thierry"
        src="https://github.com/IgorThierry.png"
      />
    </Flex>
  );
}
