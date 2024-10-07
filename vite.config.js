import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(), // Make sure this is properly included
  ],
  optimizeDeps: {
    include: ["@tanstack/react-query-devtools"],
  },
});
