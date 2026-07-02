import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For a project repository deployment, change this to "/repo-name/".
  base: "/",
});
