import { type RouteConfig, layout, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/", "routes/home.tsx"),
	route("/login", "routes/login.tsx"),
	route("/chat", "routes/mari_chat.tsx"),
	layout("routes/settings.tsx", [
		route("settings/user", "routes/settings.user.tsx"),
		route("settings/integrations", "routes/settings.integrations.tsx"),
	]),
	...(await flatRoutes({ rootDirectory: "file-routes" })),
] satisfies RouteConfig;
