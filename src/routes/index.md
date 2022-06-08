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

  import { Button } from '@svelteuidev/core';
  import { onMount } from 'svelte';

  import Bonzi from "$lib/components/Bonzi.svelte"

  let bonziButton;
  let bonziComponent;

  onMount(function(){
    bonziButton = function(){
      bonziComponent.bonziButton();
    }
  })

  let promise;

  function blocking_bonzi() {

    promise = bonziButton();
  }

</script>


<Bonzi bind:this={bonziComponent} />

{#await promise}
  <h style="color: red">Bonzi is now blocking</h>
  
{/await}

<Button variant='gradient' on:click={blocking_bonzi}>
    Bonzi
</Button>


<Intro />
<Home />

<svelte:head>
  <title>Home | Samuel Hodges</title>
  <meta name="description" content="A minimal content focused markdown sveltekit template.">
</svelte:head>