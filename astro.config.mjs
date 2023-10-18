import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FlyCD",
      social: {
        twitter: "https://twitter.com/p_mbanugo",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
