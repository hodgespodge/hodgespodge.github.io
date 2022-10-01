---
layout: post
title: "How I made this website"
slug: "first-post"
description: "In this post, I will demonstrate how I created this website using the svelte framework and github pages for hosting."
tags:
  [
    { name: "Svelte Kit", link: "https://kit.svelte.dev/" },
    { name: "Tailwind", link: "https://www.tailwindcss.com" },
    { name: "Markdown", link: "https://www.markdownguide.org/" },
  ]
date: "June 22 2022"
---


# Github Pages

If you're checking out my website, there's a good chance you're already familiar with Github Pages. If you aren't, here's your introduction: [Github Pages](https://pages.github.com/) is a service that allows you to host your website on a free domain tied to your Github account. Github Pages is a great way to host any static website (like this one). All you need is a github account. 

The docs for Pages recommends getting started with Jekyll to generate the static website from markdown files. You can find the docs [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll). Additionally, there are many open source templates available for Pages.

## Svelte

Instead of Jekyll, I use [Svelte Kit](https://kit.svelte.dev/) to generate the static website. Unlike some other popular frameworks, Svelte Kit compiles its JavaScript/Svelte code into optimized vanilla JavaScript.

This website is built off the [`chola`](https://github.com/sharu725/chola) template. The chola template is simple and demonstrates many of Svelte's features. It is a good starting point for building a Svelte app.

## Initial steps

Github Pages only supports static websites. Svelte is capable of generating static websites by using a static adapter. The [svelte.config.js](https://github.com/hodgespodge/hodgespodge.github.io/blob/main/svelte.config.js) file is where you configure the build process. Mdsvex is a library which compiles markdown into html for svelte similar to Jekyll. The msdvex compilation step is included in the svelte.config.js file.

Svelte Kit uses `npm run build` to compile. After compiling, I use `npm run deploy` to deploy the website to Github Pages. I use the [gh-pages.js](https://github.com/hodgespodge/hodgespodge.github.io/blob/main/gh-pages.js) file to configure the remote branch where the compiled website is deployed. Additionally, we set the deployment branch in the Github repository's settings in the "pages" tab.

## Additions

#### Bonzi

The first big addition I made to the site was adding Bonzi the purple gorilla from the [Clippy.js](https://www.smore.com/clippy-js) JavaScript library. To achieve this, I created a bonzi button svelte component in the `components` directory. If the button is clicked once, bonzi appears. If the button is clicked again, the original bonzi disapears (even if the user has changed pages). To  achieve this, I use a writable store to ensure that bonzi globally accessible by each bonzi button. 

Svelte by default enforces type checking. Since I'm lazy, I didn't feel like figuring out the types for the clippy.js library. I disable type checking by creating a [tsconfig.json](https://github.com/hodgespodge/hodgespodge.github.io/blob/main/tsconfig.json) file with the noImplicitAny: false.

#### Sticky header

Another change I made was to improve the header. The included Chola header works fine for short pages, but if the page is long, the user will need to scroll to return to the top of the page. I added a sticky header that disapears when the user scrolls down, but reappears when they scroll up. That way, the header doesn't block the screen, but is always available if the user needs it. I utilize the [svelte-headroom](https://github.com/collardeau/svelte-headroom) component in the [header file](https://github.com/hodgespodge/hodgespodge.github.io/blob/main/src/lib/components/Header.svelte).



