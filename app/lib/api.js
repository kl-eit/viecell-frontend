export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.viecells.com";
export async function fetchAPI(endpoint, populate = "*") {
  try {
    const hasQuery = endpoint.includes("?");

    const populateQuery =
      typeof populate === "object"
        ? buildPopulateQuery(populate)
        : `populate=${populate}`;

    const url = `${STRAPI_URL}/api/${endpoint}${
      hasQuery ? "&" : "?"
    }${populateQuery}`;

    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Strapi fetch error:", error);
     return null;
  }
}

export async function fetchAPINested(endpoint, populateConfig) {
  try {
    const hasQuery = endpoint.includes("?");

    const populateQuery = buildPopulateQuery(populateConfig);

    const url = `${STRAPI_URL}/api/${endpoint}${
      hasQuery ? "&" : "?"
    }${populateQuery}`;

    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Strapi nested fetch error:", error);
    return null;
  }
}

/**
 * Populate query builder (shared)
 */
function buildPopulateQuery(obj, prefix = "populate") {
  const params = [];

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object") {
      params.push(
        buildPopulateQuery(value, `${prefix}[${key}]`)
      );
    } else {
      params.push(`${prefix}[${key}]=${value}`);
    }
  }

  return params.join("&");
}
export function getMediaUrl(media) {
  if (!media || !media.url) return null;
  return media.url.startsWith('http') ? media.url : STRAPI_URL + media.url;
}