
import { fetchEntries } from '@builder.io/sdk-svelte';

type LayoutContent = Awaited<ReturnType<typeof fetchEntries>>;

async function load(): Promise<{ layoutContent: LayoutContent } | { status: number }> {

    // Fetch Builder content
    const layoutContent = await fetchEntries({
        model: 'global-content',
        apiKey: "bfef1e6901994b58af9dc96e1cc8ab93",
        options: {
          fields: 'data.logo'
          
        }
      });
      console.log( '+layout.server.ts - layoutContent', layoutContent );
    // If content doesn't exist or is null, return a 404 status
    return layoutContent ? { layoutContent } : { status: 404 };
    
}

export type { LayoutContent };
export { load };