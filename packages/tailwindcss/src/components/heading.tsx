import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";

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

type HeadingProps<T extends ElementType = "h2"> = {
	as?: T;
	size?: keyof typeof sizeStyles;
	weight?: keyof typeof weightStyles;
} & ComponentPropsWithoutRef<T>;

export const HeadingComponent = <T extends ElementType = "h2">(
	{ as, size = "md", weight = "medium", children, className, ...rest }: HeadingProps<T>,
	ref: React.Ref<Element>
) => {
	const classes = cn("font-default text-gray-900 leading-full m-0", sizeStyles[size], weightStyles[weight], className);
	const Component = as || "h2";

	return (
		// eslint-disable-next-line
		<Component ref={ref as React.Ref<any>} className={classes} {...rest}>
			{children}
		</Component>
	);
};

export const Heading = forwardRef(HeadingComponent) as unknown as {
	<T extends ElementType = "h2">(props: HeadingProps<T> & { ref?: React.Ref<Element> }): React.JSX.Element;
	displayName: string;
};

Heading.displayName = "Heading";
