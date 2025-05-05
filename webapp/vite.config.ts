import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "include-media": path.resolve(
        __dirname,
        "node_modules/include-media/dist/_include-media.scss",
      ),
    },
  },
});
