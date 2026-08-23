import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "durrah-jewellery-landing-page-durrah-saeid-2005-dev.apps.rm2.thpm.p1.openshiftapps.com"
      ]
  }
});
