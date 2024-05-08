/* import { fetchOneEntry } from '@builder.io/sdk-svelte';

type GlobalContentData = Awaited<ReturnType<typeof fetchOneEntry>>;

async function load(): Promise<{ navigationLinks: string[]; siteLogo: string } | { status: number }> {
  // Fetch Builder content
  const globalContentResponse = await fetchOneEntry({
    model: 'global-settings-and-content',
    apiKey: "bfef1e6901994b58af9dc96e1cc8ab93",
    options: {
      fields: 'data.navigationLinks,data.siteLogo'
    }
  });

  if (!globalContentResponse || !globalContentResponse.data?.globalSettingsAndContent?.length) {
    // Handle potential errors or empty data gracefully (optional)
    return { status: 500 }; // Or throw an error if preferred
  }

  const contentData = globalContentResponse.data.globalSettingsAndContent[0].content.data;

  // Extract desired properties using destructuring and type assertions
  const { navigationLinks = [], siteLogo = '' } = contentData as { navigationLinks: string[]; siteLogo: string };

  return {
    navigationLinks,
    siteLogo
  };
}

export type { GlobalContentData };
export { load };

*/