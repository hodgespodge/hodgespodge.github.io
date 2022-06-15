<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/api/posts.json`);
    const posts = await res.json();

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
