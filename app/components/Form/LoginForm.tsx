import { useActionState, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import supabase from "../../src/supabase/client";
import { NeumorphButton, TextInput } from "../index";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const submitUserData = async (prevState: any, formData: FormData) => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: (formData.get("email") as string) || "",
			password: (formData.get("password") as string) || "",
		});

		if (error) {
			return { error: error };
		}

		console.log("User data:", data);
		return { success: true, email: data.user?.email };
	} catch (error) {
		alert(error);
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
				/>
				<TextInput
					label="Password"
					name="password"
					placeholder="Enter your password"
					icon={<IoKeyOutline />}
					type="password"
					required
					minLength={6}
				/>
				<NeumorphButton
					type="submit"
					label={isPending ? "Submitting..." : "Login"}
					disabled={isPending}
					icon={<FaLocationArrow />}
				/>

				{state?.error ? (
					<div>
						{state.error.status}
						{state.error.code}
						{state.error.message}
					</div>
				) : null}
			</form>
		</div>
	);
}
