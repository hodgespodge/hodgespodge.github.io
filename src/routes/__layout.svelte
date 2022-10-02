<svelte:head> 
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>
  <!-- <script src="//cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js"></script> -->
</svelte:head>


<script>
  import "../../static/reset.css";
  import "../../static/atom-dark-syntax.css";
  import "../../static/global.css";
  import Header from "$lib/components/Header.svelte";
  import '$lib/styles/style.css';
  import '$lib/styles/clippy.css';

</script>

<Header />
<div class="bodywrapper">
  <main>
    <slot />
  </main>
</div>


<style>

  .bodywrapper {
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* @media screen and (max-width: 600px) {} */
</style>
