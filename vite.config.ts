import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ["**/*.pdf"],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // Añade .mjs aquí
  },
  server: {
    host: '0.0.0.0', // Permite acceder desde cualquier IP en la red local
    port: 5173, // O el puerto que estés usando
  }
});
