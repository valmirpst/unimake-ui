"use client";

import { cn } from "@/lib/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ComponentProps, ComponentRef, forwardRef, useState } from "react";

const sizeStyles = {
	sm: "w-4 h-4",
	md: "w-5 h-5"
};

export interface CheckboxProps extends ComponentProps<typeof CheckboxPrimitive.Root> {
	size?: "sm" | "md";
}

export const Checkbox = forwardRef<ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
	({ size = "md", className, disabled, ...rest }, ref) => {
		const [isChecked, setIsChecked] = useState(false);

		const checkedClasses =
			"data-[state=checked]:bg-unimake-300 data-[state=checked]:border-unimake-300 data-[state=checked]:hover:filter data-[state=checked]:brightness-110 data-[state=checked]:focus:outline-hidden data-[state=checked]:focus-visible:bg-unimake-500";

		const classes = cn(
			"all-none cursor-pointer overflow-hidden box-border flex justify-center items-center bg-gray-50 border border-gray-300 dark:border-gray-500 rounded-xs transition-colors",
			checkedClasses,
			sizeStyles[size],
			disabled && "opacity-50 cursor-default",
			className
		);

		return (
			<>
				<CheckboxPrimitive.Root
					onCheckedChange={value => {
						setIsChecked(!!value);
						rest.onCheckedChange?.(value);
					}}
					value={isChecked.toString()}
					ref={ref}
					className={classes}
					disabled={disabled}
					{...rest}
				>
					<CheckboxPrimitive.Indicator
						className="data-[state=checked]:animate-slide-in data-[state=unchecked]:animate-slide-out"
						asChild
					>
						<Check strokeWidth={3} className="w-3 h-3 stroke-white-300" />
					</CheckboxPrimitive.Indicator>
				</CheckboxPrimitive.Root>
			</>
		);
	}
);

Checkbox.displayName = "Checkbox";
