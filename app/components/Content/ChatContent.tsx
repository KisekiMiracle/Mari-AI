import React, { type ComponentPropsWithoutRef } from "react";
import {
	FaLightbulb,
	FaLocationArrow,
	FaRegCheckCircle,
	FaRegKeyboard,
} from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { ChatInput } from "../Input/ChatInput";
import { ChatHeader } from "../Navigation/ChatHeader";
import { ChatSpeechBubble } from "../Notification/ChatSpeechBubble";

interface ChatContentProps extends ComponentPropsWithoutRef<"div"> {}

export function ChatContent({ ...props }: ChatContentProps) {
	return (
		<section className="relative w-full flex flex-col px-16 py-12  bg-slate-50 ">
			<ChatHeader />
			<div className="h-full flex flex-col justify-end gap-4 py-6">
				<ChatSpeechBubble
					className="self-end"
					content="This is a regular message."
				/>
				<ChatSpeechBubble
					variant="warning"
					leadingIcon={<IoWarning className="text-xl" />}
					content="Hi! This is another chat bubble."
				/>
				<ChatSpeechBubble
					variant="success"
					className="self-end"
					leadingIcon={<FaRegCheckCircle />}
					content="This is a message that returns a success."
				/>
				<ChatSpeechBubble
					variant="insight"
					leadingIcon={<FaLightbulb className="text-xl" />}
					content="Hi! This is some Insightfull moment!"
				/>
			</div>
			<ChatInput
				leadingIcon={<FaRegKeyboard className="text-lg" />}
				label="How can I help you today~?"
				trailingIcon={
					<button
						type="button"
						className="p-2 text-gray-500 transition-colors duration-150 hover:cursor-pointer hover:text-gray-900 active:text-pink-600"
					>
						<FaLocationArrow className="text-lg" />
					</button>
				}
			/>
		</section>
	);
}
