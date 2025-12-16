export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchAPI(endpoint, populate = "*") {
  try {
    // Check if the endpoint already has query params
    const hasQuery = endpoint.includes("?");
    let populateQuery = populate;
    if (typeof populate === "object") {
      populateQuery = buildPopulateQuery(populate);
    }
    const url = `${STRAPI_URL}/api/${endpoint}${hasQuery ? "&" : "?"}populate=${populate}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}, status: ${res.status}`);
    const json = await res.json();
    return json.data;  // Return just the data from the response
  } catch (error) {
    console.error(error);
    return null;
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