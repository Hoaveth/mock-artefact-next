// components/Button.ts
import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  fontWeight: 'regular',
};

const primaryVariant = {
  bg: 'black',
  color: 'white',
  _hover: {
    bg: '#6C6F4B',
    color: 'white',
  },
};

const secondaryVariant = {
  bg: '#DCDBD9',
  color: 'gray.600',
  _hover: {
    bg: '#6C6F4B',
    color: 'white',
  },
};

const variants = {
  primary: primaryVariant,
  secondary: secondaryVariant,
};

const Button: ComponentStyleConfig = {
  baseStyle,
  variants,
};

export default Button;
