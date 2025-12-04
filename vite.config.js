// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // ⚠️ TEMPORARY FIX: Hardcode the correct repo name
  const repoName = 'portfolio';
  base: "/portfolio/"; 

  // The 'loadEnv' and VITE_REPO_NAME part is commented out/ignored for deployment
  // const env = loadEnv(mode, process.cwd(), "");
  
  return {
    // CRITICAL: We hardcode the correct path here for the deployment build
    base: mode === 'production' ? `/${repoName}/` : '/', 
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});