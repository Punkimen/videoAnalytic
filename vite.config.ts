import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@styles": path.resolve("src/styles"),
      "@/components": path.resolve("src/components/*"),
      "@/store": path.resolve("src/store/*"),
      "@/utils": path.resolve("src/utils/*"),
    },
  },
});
