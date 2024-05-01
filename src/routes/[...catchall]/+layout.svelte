<script lang="ts">
import "../../app.css";

// 

type LayoutContent = {
    data: {
        logo: string;
        // Add more properties if needed
    };
}; 

export let data: LayoutContent;
console.log( '+layout.svelte - content ', data );


</script>

<header>
    <div class="w-full shadow grid-cols-3">
        <a class="pl-5" href="/"><h1>{data.data.logo}</h1></a>
    </div>    
</header>

<slot></slot>