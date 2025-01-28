import { ComponentProps } from 'react';
import { styled } from '../styles';

export const TextArea = styled('textarea', {
  backgroundColor: '$gray100',
  padding: '$2 $3',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray100',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$unimake300',
  },

  '&::placeholder': {
    color: '$gray500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea';
