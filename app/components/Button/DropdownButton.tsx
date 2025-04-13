import {
	type ComponentPropsWithoutRef,
	type ReactElement,
	useState,
} from "react";
import { FaChevronDown } from "react-icons/fa";
import { PiFolderOpen } from "react-icons/pi";
import { FlatButton } from "./FlatButton";

interface DropdownItemProps extends ComponentPropsWithoutRef<"button"> {
	label: string;
	leadingIcon?: ReactElement;
	children: React.ReactNode;
}

export function DropdownButton({
	label,
	children,
	...props
}: DropdownItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<FlatButton
				label={label}
				leadingIcon={<PiFolderOpen className="text-2xl" />}
				variant="sidenav"
				className={`group ${isOpen ? "bg-gray-100 text-pink-600" : ""}`}
				trailingIcon={
					<FaChevronDown
						className={`text-md transition-transform ${isOpen ? "rotate-180" : ""}`}
					/>
				}
				onClick={() => setIsOpen(!isOpen)}
				{...props}
			/>

			{isOpen && <div className="mt-2 overflow-hidden">{children}</div>}
		</>
	);
}
