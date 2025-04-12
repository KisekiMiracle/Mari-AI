import { route, type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  route("/", "routes/home.tsx"),
  route("/login", "routes/login.tsx"),
  ...(await flatRoutes({ rootDirectory: "file-routes" })),
] satisfies RouteConfig;
