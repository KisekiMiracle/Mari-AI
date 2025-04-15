import React from "react";
import type { Route } from "./+types/settings.integrations";

export function meta({ matches }: Route.MetaArgs) {
	return [{ title: "Mari AI | User" }];
}

export default function IntegrationsSettings() {
	return <div>settings.integrations</div>;
}
