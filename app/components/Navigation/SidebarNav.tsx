import { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdLogout, MdSubdirectoryArrowRight } from "react-icons/md";
import { PiFolderLight, PiFolderOpen } from "react-icons/pi";
import { NavLink } from "react-router";
import { DropdownButton, FlatButton } from "~/components/";

export function SidebarNav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);

	// Escape key closes sidebar
	useEffect(() => {
		function handleEscape(e: KeyboardEvent) {
			if (e.key === "Escape") setIsOpen(false);
		}
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	return (
		<>
			{/* Mobile burger button */}
			<button
				type="button"
				onClick={toggleSidebar}
				className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-md"
			>
				{isOpen ? (
					<FaTimes className="text-xl" />
				) : (
					<FaBars className="text-xl" />
				)}
			</button>

			{/* Backdrop (click to close) */}
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 bg-black/70 bg-opacity-50 z-30 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`
					fixed top-0 left-0 h-screen min-w-2/12 bg-white border-r border-gray-300 z-40
					transform transition-transform duration-300 ease-in-out
					${isOpen ? "translate-x-0" : "-translate-x-full"} 
					md:translate-x-0 md:static md:block
				`}
			>
				<div className="flex flex-col h-full justify-between px-4 py-12">
					{/* Top section */}
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4 center items-center">
							<h1 className="font-extrabold text-2xl">MariAI Dashboard</h1>
							<img
								src="https://res.cloudinary.com/dsckrgnlf/image/upload/v1742036137/pfp_hhqq16.png"
								alt="Profile"
								className="rounded-full w-20 h-20"
							/>
							<p className="text-center flex flex-col">
								<span className="font-semibold text-lg">user.name</span>
								<span className="text-gray-500 text-sm">user@email.com</span>
							</p>
						</div>
						<nav className="flex flex-col gap-3.5">
							<hr className="text-gray-300" />
							<ul>
								<li>
									<FlatButton
										label="Knowledge Base"
										leadingIcon={<LuBrain className="text-2xl" />}
										className="w-full text-sm"
										variant="sidenav"
									/>
								</li>
							</ul>
							<ul>
								<li>
									<FlatButton
										label="Mari RPG Stats"
										leadingIcon={<IoStatsChart className="text-2xl" />}
										className="w-full text-sm"
										variant="sidenav"
									/>
								</li>
							</ul>
							<hr className="text-gray-300" />
							<ul>
								<li>
									<DropdownButton
										label="Recent Projects"
										className="w-full text-sm"
										leadingIcon={{
											open: <PiFolderOpen className="text-2xl" />,
											closed: <PiFolderLight className="text-2xl" />,
										}}
									>
										<FlatButton
											className="w-full text-sm"
											label="Project #1"
											variant="sidenav"
											leadingIcon={
												<MdSubdirectoryArrowRight className="text-2xl" />
											}
										/>
										<FlatButton
											className="w-full text-sm"
											label="Project #2"
											variant="sidenav"
											leadingIcon={
												<MdSubdirectoryArrowRight className="text-2xl" />
											}
										/>
										<FlatButton
											className="w-full text-sm"
											label="Project #3"
											variant="sidenav"
											leadingIcon={
												<MdSubdirectoryArrowRight className="text-2xl" />
											}
										/>
										<hr className="text-gray-300" />
										<FlatButton
											className="w-full text-xs my-2"
											label="Add New Project"
											variant="sidenav"
											leadingIcon={<IoMdAdd className="text-lg" />}
										/>
									</DropdownButton>
								</li>
							</ul>
						</nav>
					</div>
					<NavLink to="/settings/user" end>
						<FlatButton
							label="Settings"
							variant="sidenav"
							className="w-full text-sm"
							leadingIcon={<CiSettings className="text-2xl" />}
						/>
					</NavLink>
				</div>
			</aside>
		</>
	);
}
