<script>
    import { onMount } from 'svelte';
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

