import type { Route } from "./+types/home";

export function meta({ matches }: Route.MetaArgs) {
	return [
		{ title: "Mari AI" },
		{ name: "description", content: "Hi, I am Mari, your AI Assistant!" },
	];
}

export default function Home() {
	return <>Hey, this is the HomePage! </>;
}
