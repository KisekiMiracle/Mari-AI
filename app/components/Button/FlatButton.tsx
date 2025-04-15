import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ReactElement } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	label: string;
	leadingIcon?: ReactElement;
	trailingIcon?: ReactElement;
	variant?: "primary" | "secondary" | "sidenav";
}

export function FlatButton({
	label,
	leadingIcon,
	trailingIcon,
	variant,
	className,
	...props
}: ButtonProps) {
	return (
		<button {...props} className={cn(buttonvariants({ variant }), className)}>
			<div className="flex items-center gap-3.5">
				{leadingIcon}
				<p>{label}</p>
			</div>
			{trailingIcon}
		</button>
	);
}

const buttonvariants = cva(
	"flex h-fit justify-between items-center py-1.5 px-2.5 rounded-md shadow-mssm transition-colors duration-150 hover:cursor-pointer",
	{
		variants: {
			variant: {
				primary: "bg-pink-600 text-white hover:bg-pink-500",
				secondary: "border",
				sidenav: cn(
					"font-semibold hover:bg-gray-100 hover:text-pink-600",
					"data-[state=open]:bg-pink-600 data-[state=open]:text-white",
				),
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);
