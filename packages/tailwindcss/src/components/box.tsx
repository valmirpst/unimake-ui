import { cn } from "@/lib/cn";
import React, { forwardRef } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ as: Component = "div", children, className, ...rest }, ref) => {
		return (
			<Component
				ref={ref}
				className={cn(`p-6 bg-gray-100 border border-gray-100 rounded-sm box-border`, className)}
				{...rest}
			>
				{children}
			</Component>
		);
	}
);

Box.displayName = "Box";
