import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: { entries: ['*', '/rss.xml'] }
	}
};

export default config;
