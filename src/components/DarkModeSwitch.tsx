import { useColorMode, Switch, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      position="fixed"
      top="1rem"
      right="1rem"
      aria-label="Switch Mode"
      variant="ghost"
      colorScheme="gray"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

{
  /* <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    /> */
}
