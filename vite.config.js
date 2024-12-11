import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend server URL
        changeOrigin: true, // Change the origin of the request to match the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite API path if needed
      },
    },
  },
});
