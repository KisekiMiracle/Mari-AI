import { useActionState, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import { NeumorphButton, TextInput } from "../index";

// Mock API call with proper TypeScript typing
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const submitUserData = async (prevState: any, formData: FormData) => {
	try {
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Get form values
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		// Validate inputs
		if (!email.includes("@")) {
			return { type: "invalidEmail", error: "Invalid email address" };
		}

		if (password.length < 6) {
			return {
				type: "passwordError",
				error: "Password must be at least 6 characters",
			};
		}

		return { success: true, email };
	} catch (error) {
		return { type: "loginFailed", error: "Login failed. Please try again." };
	}
};

export function LoginForm() {
	const [state, formAction, isPending] = useActionState(submitUserData, null);

	return (
		<div
			className="flex flex-col gap-y-6 w-md py-12 px-12
               bg-white rounded-xl shadow-sm"
		>
			<h1 className="text-[1.75rem] font-bold">Sign in to your account</h1>
			<form
				id="login-form"
				noValidate
				className="flex flex-col gap-y-6 "
				action={formAction}
			>
				<TextInput
					label="Email"
					name="email"
					placeholder="your@email.com"
					icon={<FiMail />}
					type="email"
					required
					errorData={state?.type === "invalidEmail" ? state?.error : ""}
				/>
				<TextInput
					label="Password"
					name="password"
					placeholder="Enter your password"
					icon={<IoKeyOutline />}
					type="password"
					required
					minLength={6}
					errorData={state?.type === "passwordError" ? state?.error : ""}
				/>
				<NeumorphButton
					type="submit"
					label={isPending ? "Submitting..." : "Login"}
					disabled={isPending}
					icon={<FaLocationArrow />}
				/>

				{state?.success && (
					<p className="text-green-500">Logged in as {state.email}</p>
				)}
			</form>
		</div>
	);
}
