export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
export async function fetchAPI(endpoint, populate = "*") {
  try {
    // Check if endpoint already has query params
    const hasQuery = endpoint.includes("?");
    const url = `${STRAPI_URL}/api/${endpoint}${hasQuery ? "" : `?populate=${populate}`}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}, status: ${res.status}`);

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getMediaUrl(media) {
  if (!media || !media.url) return null;
  return STRAPI_URL + media.url;
}
