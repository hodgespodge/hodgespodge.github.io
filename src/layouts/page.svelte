<script>
  export let title;
  export let description;
</script>

<h1>{title}</h1>
<slot />

<svelte:head>
  <title> {title} | Samuel Hodges</title>
  <meta name="description" content={description} />
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>
</svelte:head>
