import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray100',

  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      md: {
        padding: '$2 $3',
      },
      lg: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$unimake300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
});

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray500',
  fontWeight: '$regular',
});

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
});
