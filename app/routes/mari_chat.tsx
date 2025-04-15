import { FaLocationArrow, FaRegKeyboard } from "react-icons/fa";
import { ChatContent, SidebarNav } from "~/components/";
import MariArtContent from "~/components/Content/MariArtContent";
import type { Route } from "./+types/mari_chat";

export function meta({ matches }: Route.MetaArgs) {
	return [
		{ title: "Mari AI | Chat" },
		{ name: "description", content: "Chat with Mari!" },
	];
}

export default function mari_chat() {
	return (
		<main className="flex flex-col md:flex-row">
			<SidebarNav />
			<ChatContent />
			<MariArtContent />
		</main>
	);
}
