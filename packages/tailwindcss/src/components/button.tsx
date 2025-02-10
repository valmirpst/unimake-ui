import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import React, { forwardRef } from "react";

const sizeStyles = {
	sm: "min-w-[96px] h-8",
	md: "h-9",
	lg: "h-10",
	full: "w-full h-9"
};

const variantStyles = {
	primary: "text-white-300 bg-unimake-300 enabled:hover:bg-unimake-500 disabled:opacity-60 disabled:cursor-default",
	secondary:
		"text-gray-900 enabled:hover:text-gray-100 dark:enabled:hover:text-gray-900 border border-unimake-300 enabled:hover:bg-unimake-300 disabled:opacity-60 disabled:cursor-default",
	tertiary:
		"text-gray-700 enabled:hover:text-gray-900 bg-transparent enabled:hover:bg-gray-200 disabled:opacity-60 disabled:cursor-default",
	danger: "text-white-300 bg-red-500 enabled:hover:bg-red-700 disabled:opacity-60 disabled:cursor-default",
	safe: "text-white-300 bg-green-500 enabled:hover:bg-green-700 disabled:opacity-60 disabled:cursor-default",
	link: "p-0 h-max min-w-max text-gray-900 enabled:hover:underline disabled:opacity-60 disabled:cursor-default focus-visible:outline-none focus-visible:underline"
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	size?: keyof typeof sizeStyles;
	variant?: keyof typeof variantStyles;
	loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ asChild, size = "md", variant = "primary", loading = false, disabled, children, className, ...rest }, ref) => {
		const Component = asChild ? Slot : "button";

		const classes = cn(
			"rounded-md font-medium flex items-center justify-center gap-2 px-6 py-2 cursor-pointer transition relative",
			sizeStyles[size],
			variantStyles[variant],
			className
		);

		return (
			<Component ref={ref} className={asChild ? className : classes} disabled={disabled || loading} {...rest}>
				{loading && (
					<span className="absolute inset-0 flex items-center justify-center">
						<Loader2 className="w-4 h-4 animate-spin" />
					</span>
				)}
				<span className={`${loading ? "opacity-25" : ""} flex items-center justify-center gap-2`}>{children}</span>
			</Component>
		);
	}
);

Button.displayName = "Button";
