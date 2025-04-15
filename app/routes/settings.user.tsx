import { CiImageOn } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { FlatButton, TextInput } from "~/components";
import type { Route } from "./+types/settings.user";

export function meta({ matches }: Route.MetaArgs) {
	return [{ title: "Mari AI | User" }];
}

export default function UserSettings() {
	return (
		<section className="w-full shadow-sm rounded-xl mx-8 px-8 py-6 bg-white">
			<h2 className="text-2xl font-semibold text-gray-900">Profile</h2>
			<span className="text-sm text-gray-500">
				Manage your name, password and account settings.
			</span>
			<div className="flex justify-between mt-20 w-6/12">
				<span className="text-gray-500 text-sm">Avatar</span>
				<div className="flex gap-6">
					<div className="h-fit p-4 border-1 rounded-full border-gray-500 border-dashed">
						<CiImageOn />
					</div>
					<div className="flex flex-col items-center">
						<FlatButton
							leadingIcon={<FiUpload />}
							label="Upload Photo"
							type="button"
							variant="secondary"
						/>
						<small className="text-gray-500">Pick a photo up to 1MB.</small>
					</div>
					<FlatButton label="Delete" type="button" />
				</div>
			</div>
			<hr className="my-12 text-gray-300" />
			<h3 className="text-lg font-semibold text-gray-900">Personal Info</h3>
			<div className="flex flex-col w-fit mt-4 min-w-6/12">
				<form action="" className="flex flex-col gap-8">
					<div className="flex flex-col gap-2.5">
						<TextInput
							label="Full Name"
							placeholder="Enter full name"
							className="flex-row w-full justify-between font-normal text-sm text-gray-500 [&>div]:w-sm"
						/>
						<small className="self-end text-gray-500">
							Enter your full name, or a display name you are comfortable with.
						</small>
					</div>
					<div className="flex flex-col gap-2.5">
						<TextInput
							label="Username"
							placeholder="Enter username"
							className="flex-row w-full justify-between font-normal text-sm text-gray-500 [&>div]:w-sm"
						/>
						<small className="self-end text-gray-500">
							Enter your display name rjx3z Preline public forums.
						</small>
					</div>
					<div className="flex flex-col gap-2.5">
						<TextInput
							label="Email"
							placeholder="Enter email address"
							className="flex-row w-full justify-between font-normal text-sm text-gray-500 [&>div]:w-sm"
						/>
						<small className="self-end text-gray-500">
							Enter the email address you want to use to log in with Preline.
						</small>
					</div>
					<hr className="my-8 text-gray-300" />
				</form>
			</div>
		</section>
	);
}
