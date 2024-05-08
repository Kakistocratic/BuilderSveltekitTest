<script lang="ts">
import "../../app.css";
import type { GlobalContentData } from "./+layout.server";


export let data
console.log( '+layout.svelte - content ', data );


</script>

<header>
    <div class="w-full shadow grid-cols-3">
        <a class="pl-5" href="/"><h1>{data.siteLogo}</h1></a>
    </div>    
</header>

<slot></slot>