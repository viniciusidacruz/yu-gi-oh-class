import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@store": path.resolve(__dirname, "./src/shared/store"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
    },
  },
});
