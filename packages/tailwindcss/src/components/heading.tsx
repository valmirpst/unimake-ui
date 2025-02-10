import { cn } from "@/lib/cn";
import React, { forwardRef } from "react";

const sizeStyles = {
	xs: "text-lg",
	sm: "text-xl",
	md: "text-2xl",
	lg: "text-4xl",
	xl: "text-5xl",
	"2xl": "text-6xl",
	"3xl": "text-7xl",
	"4xl": "text-8xl",
	"5xl": "text-9xl"
};

const weightStyles = {
	regular: "font-normal",
	medium: "font-medium",
	bold: "font-bold"
};

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType;
	size?: keyof typeof sizeStyles;
	weight?: keyof typeof weightStyles;
}

export const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(
	({ as: Component = "p", size = "md", weight = "medium", children, className, ...rest }, ref) => {
		const classes = cn(
			"font-default text-gray-900 leading-full m-0",
			sizeStyles[size],
			weightStyles[weight],
			className
		);

		return (
			<Component ref={ref} className={classes} {...rest}>
				{children}
			</Component>
		);
	}
);

Heading.displayName = "Heading";
