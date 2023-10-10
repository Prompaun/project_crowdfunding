// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@safe-globalThis/safe-ethers-lib',
        '@safe-globalThis/safe-ethers-adapters',
        '@safe-globalThis/safe-core-sdk' // เพิ่มโมดูลนี้
      ],
    },
    outDir: "build",
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
