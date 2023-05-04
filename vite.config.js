import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  plugins: [
    svelte(), // Configure PostCSS with TailwindCSS
    postcss({
      plugins: [tailwindcss],
      extract: true,
    }),
  ],
});
