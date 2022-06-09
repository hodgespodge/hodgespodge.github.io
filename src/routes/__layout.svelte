<script>
  import "../../static/reset.css";
  import "../../static/atom-dark-syntax.css";
  import "../../static/global.css";
  import Header from "$lib/components/Header.svelte";
  import '$lib/styles/style.css';
  import BonziTarget from "$lib/components/BonziTarget.svelte";

  import { onMount } from 'svelte';

  let BonziTargetComponent;
  let NewBonziTarget;

  onMount(function(){
    NewBonziTarget = function(){
      BonziTargetComponent.BonziTarget();
    }
  })


</script>

<BonziTarget bind:this={BonziTargetComponent} />
<Header />
<div class="bodywrapper" on:dblclick={NewBonziTarget}>
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
