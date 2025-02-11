import { cn } from "@/lib/cn";
import { forwardRef } from "react";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	hasError?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ hasError = false, className, ...rest }, ref) => {
		const classes = cn(
			"w-full min-h-[80px] px-3 py-2 rounded-sm resize-y bg-gray-50 border border-gray-200 dark:border-gray-300 text-gray-800 text-sm placeholder:text-gray-500",
			"focus:outline-hidden focus:border-unimake-300 dark:focus:border-unimake-300",
			"disabled:opacity-70 disabled:cursor-default",
			hasError && "border-red-300",
			className
		);

		return <textarea aria-invalid={hasError} ref={ref} className={classes} {...rest} />;
	}
);

TextArea.displayName = "TextArea";
