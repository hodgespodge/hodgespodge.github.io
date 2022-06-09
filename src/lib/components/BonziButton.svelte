<svelte:head>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>
</svelte:head>

<script>

    import { onMount } from 'svelte';
    import { bonzi_obj} from '/src/stores.js'
    import { Button } from '@svelteuidev/core';

    let bonzi = null ;
    let buttonLoading = '';

    bonzi_obj.subscribe(value => {
        bonzi = value;
    });

    onMount(() => {
        if (bonzi === null) {
            clippy.load('Bonzi', function(agent){
                bonzi = agent;
                bonzi_obj.set(bonzi);

            });
        }
    });

    const sleep = ms => new Promise(f => setTimeout(f, ms));

    export async function toggleBonzi(){

        buttonLoading = 'true';

        console.log('animation: ',bonzi._animator.currentAnimationName);

        if (bonzi._animator.currentAnimationName === 'Hide' || bonzi._animator.currentAnimationName === undefined){

            bonzi.stop();
            bonzi.show(false);
            await sleep(3000);

        } else{

            bonzi.stop();
            bonzi.hide(false);
            await sleep(3000);
        }

        buttonLoading = '';
    }
</script>

<Button class='bonzi-button' variant='gradient' on:click={toggleBonzi} loading={buttonLoading}>
    Bonzi
</Button> 


