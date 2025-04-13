import { CiSettings } from "react-icons/ci";
import { FaLocationArrow, FaRegKeyboard } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdLogout, MdSubdirectoryArrowRight } from "react-icons/md";
import { PiFolderOpen } from "react-icons/pi";
import { DropdownButton, FlatButton } from "~/components";
import { ChatContent } from "~/components/Content/ChatContent";
import { ChatInput } from "~/components/Input/ChatInput";
import type { Route } from "./+types/mari_chat";

export function meta({ matches }: Route.MetaArgs) {
	return [
		{ title: "Mari AI | Chat" },
		{ name: "description", content: "Chat with Mari!" },
	];
}

export default function mari_chat() {
	return (
		<main className="flex flex-row">
			<aside
				className="
                h-screen px-4 py-12 border-r border-gray-300
                flex flex-col justify-between w-96"
			>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4 items-center">
						<img
							src="https://res.cloudinary.com/dsckrgnlf/image/upload/v1742036137/pfp_hhqq16.png"
							alt=""
							className="rounded-full w-32 h-32"
						/>
						<p className="text-center flex flex-col">
							<span className="font-semibold text-2xl">user.name</span>
							<span className="text-gray-500">user@email.com</span>
						</p>
						<FlatButton
							label="Logout"
							leadingIcon={<MdLogout />}
							variant="secondary"
							className="font-semibold hover:border-pink-600 hover:bg-pink-600 hover:text-white"
						/>
					</div>
					<hr className="text-gray-300" />
					<nav className="flex flex-col gap-3">
						<ul>
							<li>
								<FlatButton
									label="Knowledge Base"
									leadingIcon={<LuBrain className="text-2xl" />}
									className="w-full"
									variant="sidenav"
								/>
							</li>
						</ul>
						<ul>
							<li>
								<FlatButton
									label="Mari RPG Stats"
									leadingIcon={<IoStatsChart className="text-2xl" />}
									className="w-full"
									variant="sidenav"
								/>
							</li>
						</ul>
						<ul>
							<li>
								<DropdownButton
									className="w-full"
									leadingIcon={<PiFolderOpen className="text-2xl" />}
									label="Recent Projects"
								>
									<FlatButton
										className="w-full"
										label="Project #1"
										variant="sidenav"
										leadingIcon={
											<MdSubdirectoryArrowRight className="text-2xl" />
										}
									/>
									<hr className="mt-4 mb-2 text-gray-300" />
									<FlatButton
										className="w-full"
										label="Add New Project"
										variant="sidenav"
										leadingIcon={<IoMdAdd className="text-2xl" />}
									/>
								</DropdownButton>
							</li>
						</ul>
					</nav>
				</div>
				<FlatButton
					label="Settings"
					variant="sidenav"
					className="w-full"
					leadingIcon={<CiSettings className="text-3xl" />}
				/>
			</aside>
			<section className="w-full display: flex flex-col px-16 py-12  bg-gray-50">
				<div className="w-full">
					<p className="font-semibold">Current project:</p>
				</div>
				<ChatContent />
				<ChatInput
					label="¿En qué puedo ayudarte hoy~?"
					trailingIcon={<FaLocationArrow />}
					leadingIcon={<FaRegKeyboard />}
				/>
			</section>
		</main>
	);
}
