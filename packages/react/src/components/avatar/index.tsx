"use client";

import { User2 } from "lucide-react";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage, sizeStyles } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
	$size?: keyof typeof sizeStyles;
}

export function Avatar({ $size = "md", ...props }: AvatarProps) {
	return (
		<AvatarContainer $size={$size}>
			<AvatarImage {...props} />

			<AvatarFallback delayMs={600}>
				<User2 />
			</AvatarFallback>
		</AvatarContainer>
	);
}

Avatar.displayName = "Avatar";
