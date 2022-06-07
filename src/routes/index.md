---
title: HTML Elements
layout: post
---

<!-- <svelte:head>

  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>

</svelte:head> -->

<script>
  import Intro from "$lib/components/intro.md"
  import Home from "$lib/components/home.md"

  import { onMount } from 'svelte';

  import { Button } from '@svelteuidev/core';

  let bonzi = null ;
  let bonzi_shown = false;

  onMount(() => {
      console.log('onMount');

      loadBonzi();
  });

  function loadBonzi() {
      clippy.load('Bonzi', function(agent){

          bonzi = agent;

      });
  }

  async function bonziButton(){

      if (!bonzi_shown){
          bonzi.show();
          console.log('revealing bonzi');
          bonzi_shown = true;
      }
  }


</script>

<Button variant='gradient' on:click={bonziButton}>
    Bonzi
</Button>

<Intro />
<Home />

<svelte:head>
  <title>Home | Samuel Hodges</title>
  <meta name="description" content="A minimal content focused markdown sveltekit template.">
</svelte:head>