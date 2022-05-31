<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<svelte:head>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>

</svelte:head>

<script>
  
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('onMount');
        clippy.load('Bonzi', function(agent){
            // do anything with the loaded agent
            agent.show();
        });
    });



</script>