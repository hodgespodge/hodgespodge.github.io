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

        if (!bonzi_shown_value){
            bonzi.show();
            console.log('revealing bonzi');

            bonzi_shown.set(true);
        }
    }
</script>



