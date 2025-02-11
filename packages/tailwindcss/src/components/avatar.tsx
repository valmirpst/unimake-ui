import { cn } from "@/lib/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User2 } from "lucide-react";
import { ComponentProps, ComponentRef, forwardRef } from "react";

const rootSizeStyles = {
	xs: "w-8 h-8",
	sm: "w-9 h-9",
	md: "w-10 h-10",
	lg: "w-12 h-12"
};

const fallbackIconSizeStyles = {
	xs: "w-4 h-4",
	sm: "w-5 h-5",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};

export interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Image> {
	size?: keyof typeof rootSizeStyles;
	imageClassname?: string;
}

export const Avatar = forwardRef<ComponentRef<typeof AvatarPrimitive.Root>, AvatarProps>(
	({ size = "md", imageClassname, className, ...rest }, ref) => {
		const classes = cn("rounded-full inline-block overflow-hidden", rootSizeStyles[size], className);

		return (
			<>
				<AvatarPrimitive.Root ref={ref} className={classes}>
					<AvatarPrimitive.Image className={cn("w-full h-full object-cover", imageClassname)} {...rest} />

					<AvatarPrimitive.Fallback
						className={cn("w-full h-full flex items-center justify-center bg-gray-50 text-gray-800", imageClassname)}
						delayMs={600}
					>
						<User2 className={fallbackIconSizeStyles[size]} />
					</AvatarPrimitive.Fallback>
				</AvatarPrimitive.Root>
			</>
		);
	}
);

Avatar.displayName = "Avatar";
