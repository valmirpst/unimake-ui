"use client";

import { User2 } from "lucide-react";
import { ComponentProps } from "react";
import { Interpolation } from "styled-components";
import { AvatarContainer, AvatarFallback, AvatarImage, sizeStyles } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
	as?: React.ElementType;
	$size?: keyof typeof sizeStyles;
	$css?: Interpolation<AvatarProps>;
}

export function Avatar({ $size = "md", $css, as, ...props }: AvatarProps) {
	return (
		<AvatarContainer $size={$size} $css={$css} as={as}>
			<AvatarImage {...props} />

			<AvatarFallback delayMs={600}>
				<User2 />
			</AvatarFallback>
		</AvatarContainer>
	);
}

Avatar.displayName = "Avatar";
