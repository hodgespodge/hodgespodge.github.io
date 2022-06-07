<script>
  import site from "$lib/constants";
  import { page } from "$app/stores";
  import Headroom from "svelte-headroom";

  $: currentPage = $page.url.pathname;
</script>

<!-- create a svelte header using Headroom -->

<!-- <header> -->
  <Headroom duration="150ms" offset={50} tolerance={5}>

    <div class="headerColor">
    
    <header>
      <nav>
        <a class="logo" href="/">
          <h1>{site.title}</h1>
        </a>
        <ul>
          {#each site.menus as { url, name }}
            <li>
              <a
                sveltekit:prefetch={url.match("http") ? null : true}
                class:active={url !== "/"
                  ? currentPage.match(url)
                  : url === currentPage}
                href={url}>{name}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
    </header>
  </div>
  </Headroom>
  
<!-- </header> -->

<style>

  .headerColor {
    background-color: #34B3F1;
  }


  header {
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;

    height: 10;

  }

  nav,
  ul {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
  }
  ul {
    margin-left: auto;
  }
  li {
    margin-left: 1.5rem;
    list-style: none;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    color: #000000;
    transition-duration: var(--duration-100);
  }
  h1:hover,
  a.active {
    /* color: var(--brand-color); */
    color: #F15412;
    
  }
  a {
    text-decoration: none;
    font-size: 100%;
    color: #000000;
  }

  @media screen and (max-width: 600px) {
    nav {
      display: block;
    }
    ul {
      margin-bottom: 0;
    }
    li {
      margin: 0 1rem 1rem 0;
    }
  }
</style>

