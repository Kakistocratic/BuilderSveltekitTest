import { fetchOneEntry, getBuilderSearchParams  } from '@builder.io/sdk-svelte';


type Content = Awaited<ReturnType<typeof fetchOneEntry>>;



async function load(event: { url: URL }): Promise<{ content: Content } | { status: number }> {

  // Fetch Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: "bfef1e6901994b58af9dc96e1cc8ab93",
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || '/'
    }
  });
  console.log('+page.server.ts - type of fetched content', typeof content)
  return content ? { content } : { status: 404 };

  

}
export type { Content };
export { load };



