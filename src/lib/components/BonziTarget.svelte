<svelte:head>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="//cdn.rawgit.com/smore-inc/clippy.js/master/build/clippy.min.js"></script>
</svelte:head>

<script>
    // import {createEventDispatcher} from 'svelte';

    // import { onMount } from 'svelte';
    import { bonzi_obj} from '/src/stores.js'

    let bonzi = null ;

    bonzi_obj.subscribe(value => {
        bonzi = value;
    });

    export function BonziTarget(){
        console.log('BonziTarget');
        if (bonzi === null) {
            console.log('BonziTarget: bonzi is null');
            
        }else {

            console.log('BonziTarget: bonzi is not null');
            // bonzi.moveTo current mouse position
            console.log('Moving bonzi to mouse position', event.clientX, event.clientY);
            bonzi.moveTo(event.clientX, event.clientY); 

            // TODO: figure out why moveTo doesn't work
        }

    }


</script>
