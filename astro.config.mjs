import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
    site: 'https://zulfan.netlify.app/',
    // Important!
    // Only official '@astrojs/*' integrations are currently supported by Astro.
    // Add 'experimental.integrations: true' to make 'astro-robots-txt' working
    // with 'astro build' command.
    experimental: {
        integrations: true,
    },
    integrations: [robotsTxt()],
});
