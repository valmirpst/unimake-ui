import { cn } from "@/lib/cn";
import { forwardRef, ReactNode } from "react";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	hasError?: boolean;
	hSize?: "sm" | "md" | "lg";
	pref?: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	className?: string;
}

const sizeStyles = {
	sm: "h-8",
	md: "h-9",
	lg: "h-10"
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ hasError = false, hSize = "md", prefix, startIcon, endIcon, className, ...rest }, ref) => {
		const inputContainerClasses = cn(
			"w-full px-3 py-2 rounded-sm box-border flex items-center justify-start bg-gray-50 border border-gray-200 dark:border-gray-300 text-gray-800 text-sm",
			"focus-within:outline-hidden focus-within:border-unimake-300 dark:focus-within:border-unimake-300 focus:*:bg-red-300",
			"has-[input:disabled]:opacity-70 has-[input:disabled]:cursor-default",
			hasError && "border-red-300 dark:border-red-300",
			(!!startIcon || !!endIcon) && !prefix && "gap-2",
			sizeStyles[hSize],
			className
		);

		const inputClasses = cn(
			"font-default text-sm text-gray-800 caret-gray-800 font-regular bg-transparent border-none w-full placeholder:text-gray-500",
			"leading-full focus:outline-hidden"
		);

		const prefixClasses = cn(
			"w-max leading-full font-default font-regular text-sm text-gray-700",
			(!!startIcon || !!endIcon) && "ml-2"
		);

		return (
			<div className={inputContainerClasses}>
				{startIcon}
				{!!prefix && <span className={prefixClasses}>{prefix}</span>}
				<input spellCheck={false} className={inputClasses} ref={ref} {...rest} />
				{endIcon}
			</div>
		);
	}
);

TextInput.displayName = "TextInput";
