"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Typography, {TextDescription} from "./Typography/Typography";
export default function BlocksRendererClient({ content, blocks = {}, modifiers = {} }) {
  if (!content) return null;
  const defaultRenderers = {
    paragraph: ({ children }) => (
        <TextDescription className="mb-3">{children}</TextDescription>
    ),
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <Typography variant="h1" className="mb-3" color="primary">{children}</Typography>;
        case 2:
          return <Typography variant="h2" className="mb-3" color="primary">{children}</Typography>;
        case 3: 
          return <Typography variant="h3" className="mb-3" color="primary">{children}</Typography>;
        case 4: 
          return <Typography variant="h4" className="mb-3" color="primary">{children}</Typography>;
        case 5: 
          return <Typography variant="h5" className="mb-3" color="primary">{children}</Typography>;
        case 6: 
          return <Typography variant="h6" className="mb-3" color="primary">{children}</Typography>;
        default: 
          return <Typography variant="h1" className="mb-3" color="primary">{children}</Typography>;
      }
    },
    link: ({ children, url }) => <Link href={url}>{children}</Link>,
  };

  const namedRenderers = {
    paragraph: defaultRenderers.paragraph,
    heading: defaultRenderers.heading,
    link: defaultRenderers.link,
  };

  const namedModifiers = {
    bold: ({ children }) => <strong>{children}</strong>,
    italic: ({ children }) => <span className="italic">{children}</span>,
  };

  const resolvedBlocks = { ...defaultRenderers };
  if (blocks && typeof blocks === "object") {
    Object.keys(blocks).forEach((key) => {
      const val = blocks[key];
      if (typeof val === "string" && namedRenderers[val]) {
        resolvedBlocks[key] = namedRenderers[val];
      }
    });
  }

  const resolvedModifiers = {};
  if (modifiers && typeof modifiers === "object") {
    Object.keys(modifiers).forEach((key) => {
      const val = modifiers[key];
      if (typeof val === "string" && namedModifiers[val]) {
        resolvedModifiers[key] = namedModifiers[val];
      }
    });
  }

  return (
    <BlocksRenderer
      content={content}
      blocks={resolvedBlocks}
      modifiers={Object.keys(resolvedModifiers).length ? resolvedModifiers : undefined}
    />
  );
}
