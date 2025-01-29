"use client";

import { Check } from "lucide-react";
import { ComponentProps, ComponentRef, forwardRef } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = forwardRef<ComponentRef<typeof CheckboxContainer>, CheckboxProps>(
	(props: CheckboxProps, ref) => {
		return (
			<CheckboxContainer ref={ref} {...props}>
				<CheckboxIndicator asChild>
					<Check strokeWidth={2.5} />
				</CheckboxIndicator>
			</CheckboxContainer>
		);
	}
);

Checkbox.displayName = "Checkbox";
