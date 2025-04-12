import { LoginForm } from "~/components/index";
import type { Route } from "./+types/login";

export function meta({ matches }: Route.MetaArgs) {
	return [
		{ title: "Mari AI | Login" },
		{ name: "description", content: "Login Screen to Mari AI." },
	];
}

export default function Login() {
	return (
		<main>
			<section className="h-screen">
				<div className="h-full flex items-center justify-center bg-gray-100">
					<LoginForm />
				</div>
			</section>
		</main>
	);
}
