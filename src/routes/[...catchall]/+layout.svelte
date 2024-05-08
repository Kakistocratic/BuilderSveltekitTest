<script lang="ts">
import "../../app.css";


export let data
console.log( '+layout.svelte - content ', data );


</script>

<header>
    <div class="w-full shadow grid-cols-3">
        <a class="pl-5" href="/"><h1></h1></a>
    </div>    
</header>

<slot></slot>