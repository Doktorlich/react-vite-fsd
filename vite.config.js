import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001, // Указывает порт, на котором будет работать сервер Vite
        host: "localhost", // Указывает хост, на котором будет работать сервер Vite
        open: true, // Открывает веб-браузер автоматически при запуске сервера
    },

    // отмена минификации при сборке
    build: {
        minify: true,
        // rollupOptions: {
        //     input: {},
        // },
    },
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        react(),
    ],
});
