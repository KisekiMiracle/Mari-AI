import {
	type ComponentPropsWithoutRef,
	type ReactElement,
	useState,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	label: string;
	icon?: React.ReactElement;
	errorData?: string;
}

function PasswordVisibilityToggler({
	isPasswordMasked,
	callback,
}: { isPasswordMasked: boolean; callback: () => void }): ReactElement {
	return (
		<button
			type="button"
			className="hover:cursor-pointer text-gray-800"
			onClick={callback}
			aria-label={isPasswordMasked ? "Show password" : "Hide Password"}
		>
			{isPasswordMasked ? <FaEyeSlash /> : <FaEye />}
		</button>
	);
}

function ErrorDiagnostic() {
	return <p>Error!</p>;
}

export function TextInput({
	label,
	name,
	placeholder = "Placeholder text...",
	icon,
	type = "text",
	required,
	minLength,
	errorData,
}: InputProps): React.ReactElement {
	const [isPasswordMasked, setIsPasswordMasked] = useState(true);
	const isPasswordField = type === "password";
	const inputType = isPasswordField
		? isPasswordMasked
			? "password"
			: "text"
		: type;

	return (
		<label className="flex flex-col gap-y-2.5 font-semibold text-gray-900">
			<p
				className={`
                after:content-['*'] after:text-pink-600 ${!required ? "after:hidden" : ""}
          `}
			>
				{label}
			</p>
			<div
				className="
                flex items-center gap-x-2 py-2 px-4 shadow-sm
                border-2 border-gray-300 rounded-lg
                text-sm text-gray-900
                transition-colors duration-200
                focus-within:border-blue-500 focus-within:text-blue-500"
			>
				{icon}
				<input
					className="focus:outline-none flex-1 text-gray-900 placeholder:text-gray-400"
					type={inputType}
					autoComplete={isPasswordField ? "current-password" : "off"}
					name={name}
					placeholder={placeholder}
					required={required}
					minLength={isPasswordField ? minLength : undefined}
				/>
				{isPasswordField ? (
					<PasswordVisibilityToggler
						isPasswordMasked={isPasswordMasked}
						callback={() => {
							setIsPasswordMasked(!isPasswordMasked);
						}}
					/>
				) : null}
			</div>
			<p className="text-red-500">{errorData}</p>
		</label>
	);
}
