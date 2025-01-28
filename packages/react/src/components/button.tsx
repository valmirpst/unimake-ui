import * as React from "react";
import { cn } from "../styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "danger" | "safe" | "ghost" | "link";
	size?: "sm" | "md";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "primary", size = "md", className, children, ...props }: ButtonProps, ref) => {
		const baseClasses = "flex items-center justify-center gap-2 rounded-sm text-center transition focus:outline-none";
		const sizeClasses = {
			sm: "h-8 min-w-[96px] text-sm",
			md: "h-9 min-w-[120px] text-base"
		};
		const variantClasses = {
			primary: "bg-unimake300 text-white300 hover:bg-unimake500 disabled:bg-gray200",
			secondary: "bg-gray100 text-gray900 hover:bg-gray200 disabled:opacity-50",
			tertiary: "text-gray600 hover:text-black disabled:text-gray400",
			danger: "bg-red500 text-white300 hover:bg-red700 disabled:bg-gray200",
			safe: "bg-green500 text-white300 hover:bg-green700 disabled:bg-gray200",
			ghost: "text-gray900 hover:bg-gray100 disabled:text-gray600 disabled:opacity-50",
			link: "min-w-0 text-gray900 hover:underline disabled:text-gray600 disabled:opacity-50 focus:underline"
		};

		return (
			<button
				className={cn(
					baseClasses,
					sizeClasses[size],
					variantClasses[variant],
					"disabled:cursor-not-allowed",
					className
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
);
