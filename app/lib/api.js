export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.viecells.com";

export async function fetchAPI(endpoint, populate = "*") {
  try {
    // Check if the endpoint already has query params
    const hasQuery = endpoint.includes("?");
    let populateQuery = populate;
    if (typeof populate === "object") {
      populateQuery = buildPopulateQuery(populate);
    }
    const url = `${STRAPI_URL}/api/${endpoint}${hasQuery ? "&" : "?"}populate=${populate}`;
     const res = await fetch(url, {
      cache: "no-store",           // Disable Next.js cache
      next: { revalidate: 0 },     // Extra safety for App Router
    });
    if (!res.ok) throw new Error(`Failed to fetch ${url}, status: ${res.status}`);
    const json = await res.json();
    return json.data;  // Return just the data from the response
  } catch (error) {
    console.error(error);
    return undefined;
  }
  
}
function buildPopulateQuery(populateObj) {
  let populateQuery = "";

  Object.keys(populateObj).forEach((key) => {
    if (typeof populateObj[key] === "object") {
      const nestedPopulate = buildPopulateQuery(populateObj[key]);
      populateQuery += `&populate[${key}][populate]=${nestedPopulate}`;
    } else {
      populateQuery += `&populate[${key}]=${populateObj[key]}`;
    }
  });

  return populateQuery;
}
export function getMediaUrl(media) {
  if (!media || !media.url) return null;
  return media.url.startsWith('http') ? media.url : STRAPI_URL + media.url;
}