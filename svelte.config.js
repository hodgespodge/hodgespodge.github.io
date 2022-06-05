import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static"; 

import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	// preprocess: preprocess(),
	extensions: [".svelte", ...mdsvexConfig.extensions],
	

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		 adapter: adapter({
		   pages: 'build',
		   assets: 'build',
		   fallback: null
		 })
		 ,
		prerender: {
		enabled: true,
		default: true,
		},
		vite: {
			server: {
				fs: {
					allow: ['.'],
				}
			}
		}
	},

	preprocess: [
		preprocess({
		  postcss: true,
		}),
		mdsvex(mdsvexConfig),
	  ],
};
// kit.vite.server.fs.allow: ['locales']

export default config;