import { cn } from "@/lib/cn";
import React, { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";

export type BoxProps<T extends ElementType = "div"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

// Definição do componente Box usando forwardRef
const BoxComponent = <T extends ElementType = "div">(
	{ as, className, children, ...rest }: BoxProps<T>,
	ref: React.Ref<Element>
) => {
	const Component = as || "div";

	return (
		<Component
			// eslint-disable-next-line
			ref={ref as React.Ref<any>}
			className={cn("p-6 bg-gray-100 border border-gray-100 rounded-sm box-border", className)}
			{...rest}
		>
			{children}
		</Component>
	);
};

// Fazendo "type assertion" para adicionar displayName
export const Box = forwardRef(BoxComponent) as unknown as {
	<T extends ElementType = "div">(props: BoxProps<T> & { ref?: React.Ref<Element> }): React.JSX.Element;
	displayName: string;
};

Box.displayName = "Box";
