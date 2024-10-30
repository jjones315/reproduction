import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        alias: {
            $components: "./src/lib/ui/components",
            "$components/*": "./src/lib/ui/components/*",
            "$actions/*": "./src/lib/ui/actions/*",
            "$ui/*": "./src/lib/ui/*",
            "$trpc/*": "./src/lib/trpc/*",
            "$shared/*": "./src/lib/shared/*",
            "$server/*": "./src/lib/server/*",
            "$params/*": "./src/params/*",
            "$api/*": "./src/routes/api/*",
        },
    },
};

export default config;
