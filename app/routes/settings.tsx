import type { ReactElement } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineWebhook } from "react-icons/md";
import { NavLink, Outlet, useNavigation } from "react-router";
import SyncLoader from "react-spinners/SyncLoader";

export default function settings_layout() {
	const navigation = useNavigation();
	const isNavigating = Boolean(navigation.location);

	return (
		<section className="h-screen w-screen bg-gray-100 py-6 px-20">
			<header className="border-b py-6 flex items-center gap-4">
				<NavLink to="/chat" end>
					<IoArrowBack
						className="text-3xl transition-colors duration-150 hover:text-blue-600"
						aria-label="Return to Mari AI Chat"
					/>
				</NavLink>
				<h1 className="text-3xl font-semibold">Settings</h1>{" "}
				{/*//TODO - Replace Loader full screen */}
				{isNavigating && (
					<SyncLoader color="#212121" size={14} speedMultiplier={1} />
				)}
			</header>

			<div className="flex mt-6">
				<aside>
					<ul className="flex flex-col w-48 border-r-1 border-r-gray-300">
						{NavigationLink({
							leadingIcon: <FaUserEdit />,
							url: "/settings/user",
							label: "User Profile",
						})}
						{NavigationLink({
							leadingIcon: <MdOutlineWebhook />,
							url: "/settings/integrations",
							label: "Integrations",
						})}
					</ul>
				</aside>

				<Outlet />
			</div>
		</section>
	);

	interface NavLinkProps {
		url: string;
		leadingIcon?: ReactElement;
		label: string;
	}

	function NavigationLink({ url, label, leadingIcon }: NavLinkProps) {
		return (
			<li>
				<NavLink
					to={url}
					className={({ isActive, isTransitioning }) =>
						[
							"flex items-center gap-2.5 w-full border-r-3 py-4 text-gray-900 text-xl font-semibold transition-colors",
							"hover:text-blue-500",
							isActive
								? "!text-blue-700 border-r-blue-700"
								: "border-transparent",
							isTransitioning ? "line-through" : "",
						].join(" ")
					}
					end
				>
					{leadingIcon}
					{label}
				</NavLink>
			</li>
		);
	}
}
