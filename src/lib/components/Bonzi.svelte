<script>

    import { onMount } from 'svelte';
    import {bonzi_shown} from '/src/stores.js'

    let bonzi = null ;
    let bonzi_shown_value;

    bonzi_shown.subscribe(value => {
        bonzi_shown_value = value;
    });

    onMount(() => {

        if (! bonzi_shown_value) {
            clippy.load('Bonzi', function(agent){
                bonzi = agent;

            });
        }        
    });

    export async function bonziButton(){
        console.log('bonziButton');

        // let current_animation = bonzi._animator.currentAnimationName;
        // console.log('before current animation: '+current_animation);

        // current_animation = bonzi._animator.currentAnimationName;
        // console.log('after current animation: '+current_animation);

        if (!bonzi_shown_value){
            // animation_done = false;
            bonzi.show(false);
            console.log('revealing bonzi');

            bonzi_shown.set(true);
        } else{
            // animation_done = false;
            bonzi.hide(false);
            console.log('hiding bonzi');

            bonzi_shown.set(false);
        }

        await new Promise(r => setTimeout(r, 20000));

    }
</script>



