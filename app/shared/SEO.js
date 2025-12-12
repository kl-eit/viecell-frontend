import Head from "next/head";
export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title || "Default Title"}</title>
      <meta name="description" content={description || "Default description"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || "Default Title"} />
      <meta property="og:description" content={description || "Default description"} />
    </Head>
  );
}
