import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "reload", // via: https://stackoverflow.com/questions/77461040/can-i-get-vite-to-reload-the-browser-on-every-html-change
      configureServer(server) {
        const { ws, watcher } = server;
        watcher.on("change", (file) => {
          if (file.endsWith(".html") || file.endsWith(".css") || file.endsWith(".scss") || file.endsWith(".tsx")) {
            ws.send({
              type: "full-reload",
            });
          }
        });
      },
    },
  ],
});
