import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { keyframes, styled } from '../../styles';

export const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$gray100',
  border: '2px solid $gray100',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.1s',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$unimake300',

    '&:hover': {
      filter: 'brightness(1.1)',
    },
  },

  '&:focus, &[data-state="checked"]': {
    borderColor: '$unimake300',
  },

  '&:not(:disabled):active': {
    borderColor: '$unimake300',
  },

  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },

      md: {
        width: '$5',
        height: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white100',
  width: '$3',
  height: '$3',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.1s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
});
