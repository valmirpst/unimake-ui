import { cn } from "@/lib/cn";
import React, { forwardRef } from "react";

const sizeStyles = {
	xxs: "text-xxs",
	xs: "text-xs",
	sm: "text-sm",
	md: "text-base",
	lg: "text-lg",
	xl: "text-xl",
	"2xl": "text-2xl",
	"4xl": "text-4xl",
	"5xl": "text-5xl",
	"6xl": "text-6xl",
	"7xl": "text-7xl",
	"8xl": "text-8xl",
	"9xl": "text-9xl"
};

const weightStyles = {
	light: "font-light",
	regular: "font-normal",
	medium: "font-medium",
	bold: "font-bold"
};

const variantStyles = {
	default: "text-gray-800",
	lighter: "text-gray-600",
	danger: "text-red-300",
	safe: "text-green-500 dark:text-green-300"
};

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType;
	size?: keyof typeof sizeStyles;
	weight?: keyof typeof weightStyles;
	variant?: keyof typeof variantStyles;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
	(
		{ as: Component = "p", size = "md", weight = "regular", variant = "default", children, className, ...rest },
		ref
	) => {
		const classes = cn(
			"font-default leading-base m-0",
			sizeStyles[size],
			weightStyles[weight],
			variantStyles[variant],
			className
		);

		return (
			<Component ref={ref} className={classes} {...rest}>
				{children}
			</Component>
		);
	}
);

Text.displayName = "Text";
