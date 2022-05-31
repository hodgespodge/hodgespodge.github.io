import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess(),

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
		}
	}
};

export default config;