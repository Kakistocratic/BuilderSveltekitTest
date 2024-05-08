// +layout.server.js
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load(event) {
  // Fetching global settings and content
  const globalContentResponse = await fetchOneEntry({
    model: 'global-settings-and-content',
    apiKey: "bfef1e6901994b58af9dc96e1cc8ab93",
    options: {
      fields: 'data.navigationLinks,data.siteLogo',
    }
  });

  // Log the entire globalContentResponse
  console.log('Global Content Response:', globalContentResponse);

  // Check if globalContentResponse is null
  if (!globalContentResponse) {
    console.error('Error fetching global content:', globalContentResponse);
    return { navigationLinks: [], siteLogo: "" };
  }

  // Extract data from globalContentResponse
  const { data } = globalContentResponse;

  // Check if data is null
  if (!data) {
    console.error('Data is null:', globalContentResponse);
    return { navigationLinks: [], siteLogo: "" };
  }

  // Extract navigationLinks and siteLogo
  const { navigationLinks, siteLogo } = data;

  // Log the extracted data
  console.log('Navigation Links:', navigationLinks);
  console.log('Site Logo:', siteLogo);

  // Return the extracted data as props
  return { navigationLinks, siteLogo };
}
