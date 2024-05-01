<script lang="ts">
  import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  import NotFound from './404.svelte';
  import { CUSTOM_COMPONENTS } from "$lib/components/BuilderComponentArray";
  import SEO from '$lib/components/SEO.svelte';

  export let data: Content;
  
  const canShowContent = data.content || isPreviewing();
  console.log('+page.svelte - has content?', !!data.content);
  console.log( '+page.svelte - content ', data.content );
</script>

<!-- Path: src\routes\+page.svelte -->

<div class="w-full">
    {#if canShowContent}

      <Content 
        model="page"
        content={data.content}
        apiKey="bfef1e6901994b58af9dc96e1cc8ab93"
        enrich={true}
        customComponents={CUSTOM_COMPONENTS}
      />
    {:else}
      <NotFound />
    {/if}
</div>