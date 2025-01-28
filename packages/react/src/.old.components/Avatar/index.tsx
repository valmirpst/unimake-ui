import { User2 } from 'lucide-react';
import { ComponentProps } from 'react';
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User2 />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = 'Avatar';
