import {
	type ComponentPropsWithoutRef,
	type ReactElement,
	useEffect,
	useRef,
	useState,
} from "react";
import { FaChevronDown } from "react-icons/fa";
import { FlatButton } from "./FlatButton";

interface DropdownItemProps extends ComponentPropsWithoutRef<"button"> {
	label: string;
	leadingIcon?: {
		closed: ReactElement;
		open: ReactElement;
	};
	children: React.ReactNode;
}

export function DropdownButton({
	label,
	children,
	leadingIcon,
	...props
}: DropdownItemProps) {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? contentRef.current.scrollHeight : 0);
		}
	}, [isOpen]);

	return (
		<>
			<FlatButton
				label={label}
				leadingIcon={
					leadingIcon
						? isOpen
							? leadingIcon.open
							: leadingIcon.closed
						: undefined
				}
				variant="sidenav"
				data-state={isOpen ? "open" : "closed"}
				trailingIcon={
					<FaChevronDown
						className={`text-md transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
					/>
				}
				onClick={() => setIsOpen(!isOpen)}
				{...props}
			/>
			<div
				ref={contentRef}
				style={{
					maxHeight: `${height}px`,
				}}
				className="mt-2 gap-1 flex flex-col overflow-hidden shadow-sm transition-[max-height] duration-300 ease-in-out"
			>
				{children}
			</div>
		</>
	);
}
