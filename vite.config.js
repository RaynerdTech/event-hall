import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 4000,          // 👈 force localhost:4000
    host: "localhost",   // 👈 ensures local access
    strictPort: true,    // 👈 fail if 4000 is already used
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "underclad-athematic-nguyet.ngrok-free.dev",
    ],
  },
});
