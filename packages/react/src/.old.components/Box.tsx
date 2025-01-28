import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$6',
  backgroundColor: '$gray200',
  border: '1px solid $gray200',
  borderRadius: '$md',
  boxSizing: 'border-box',
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = 'Box';
