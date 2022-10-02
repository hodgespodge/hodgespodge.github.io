

<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */

  async function get() {
    const imports = import.meta.glob("../blog/*.{md,svx}");
    let body = [];

    for (const path in imports) {
      body.push(
        imports[path]().then(({ metadata }) => {
          return {
            ...metadata,
            path,
          };
        })
      );
    }

    const posts = await Promise.all(body);

    return posts

  }

  export async function load({ fetch }) {
    // const res = await fetch(`/api/posts.json`);
    const posts = await get()

    return {
      props: {
        posts,
      },
    };
  }

</script>

<script>
  import BonziButton from "$lib/components/BonziButton.svelte"

  export let posts;
</script>

<main>
  <article>
    <div class="article-list">
      {#each posts as { title, description, path }}
        <div>
          <a sveltekit:prefetch href={path.replace(/\.[^/.]+$/, "")}
            ><h2>{title}</h2></a
          >
          <p>{description}</p>
        </div>
      {/each}
    </div>
  </article>
</main>

<BonziButton />

<svelte:head>
  <title>Blog | Samuel Hodges</title>
  <meta
    name="description"
    content="Chola - A minimal Sveltekit theme or template which uses mdsvex. Suitable for text based websites and blogs."
  />
</svelte:head>

<style>
  h2:hover {
    color: var(--brand-color);
  }
</style>
