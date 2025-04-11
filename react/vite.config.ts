import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".",
  build: {
    outDir: "../src/view",
    emptyOutDir: true,
  },
});
