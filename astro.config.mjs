// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      // This tells astro-icon where to look for icons
      include: {
        // You can specifically allow sets here
        "simple-icons": ["*"],
        fluent: ["*"],
        "skill-icons": ["*"],
      },
    }),
  ],
});
