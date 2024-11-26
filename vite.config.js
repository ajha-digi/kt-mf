import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "demo_remote_app",
      filename: "remoteEntry.js",
      remotes: {
        demo_host_app :"http://localhost:5050/assets/remoteEntry.js"
      },
      exposes: {
        "./demoApp" : "./src/App.jsx",
        "./button" : "./src/Button.jsx"
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
