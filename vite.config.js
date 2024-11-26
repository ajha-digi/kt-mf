import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "demo_remote_app",
      filename: "remoteEntry.js",
      remotes: {},
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
