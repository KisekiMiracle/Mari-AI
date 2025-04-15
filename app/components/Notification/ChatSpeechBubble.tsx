import { cva } from "class-variance-authority";
import React, { type ComponentPropsWithoutRef, type ReactElement } from "react";
import { cn } from "../utils/cn";

interface ChatSpeechBubbleProps extends ComponentPropsWithoutRef<"div"> {
	leadingIcon?: ReactElement;
	variant?: "regular" | "warning" | "success" | "info" | "insight";
}

export function ChatSpeechBubble({
	leadingIcon,
	content,
	className,
	variant,
	...props
}: ChatSpeechBubbleProps) {
	return (
		<div {...props} className={cn("flex items-center", className)}>
			<img src="#" alt="" />
			<span className={cn(buttonvariants({ variant }))}>
				{leadingIcon}
				{content}
			</span>
		</div>
	);
}

const buttonvariants = cva(
	"inline-flex items-center gap-2.5 px-4 py-2 w-fit bg-white shadow-sm rounded-md",
	{
		variants: {
			variant: {
				regular: "text-gray-900",
				warning: "bg-pink-600 text-white",
				success: "bg-emerald-600 text-white",
				insight: "bg-amber-400 text-gray-900",
				info: "text-blue-700",
			},
		},
		defaultVariants: {
			variant: "regular",
		},
	},
);
