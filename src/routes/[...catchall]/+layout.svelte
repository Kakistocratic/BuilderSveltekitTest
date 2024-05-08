<script lang="ts">
import type { LayoutData } from "../$types";
import "../../app.css";


export let data : LayoutData
console.log( '+layout.svelte - content ', data );


</script>

<header>
    <div class="w-full shadow grid-cols-3">
        <a class="pl-5" href="/"><h1>{data.siteLogo}</h1></a>
    </div>    
</header>

<slot></slot>