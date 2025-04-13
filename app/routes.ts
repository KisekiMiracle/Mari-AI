import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/", "routes/home.tsx"),
	route("/login", "routes/login.tsx"),
	route("/mari", "routes/mari_chat.tsx"),
	...(await flatRoutes({ rootDirectory: "file-routes" })),
] satisfies RouteConfig;
