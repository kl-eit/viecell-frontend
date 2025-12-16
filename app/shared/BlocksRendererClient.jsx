"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Typography, {
} from "./Typography/Typography";

export default function BlocksRendererClient({
  content,
  blocks = {},
  modifiers = {},
}) {
  if (!content) return null;

  /* --------------------------------
     Default Block Renderers
  ---------------------------------*/
  const defaultRenderers = {
    paragraph: ({ children }) => (
      <p className="mb-3 text-reset">
        {children}
      </p>
    ),

    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return (
            <Typography variant="h1" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        case 2:
          return (
            <Typography variant="h2" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        case 3:
          return (
            <Typography variant="h3" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        case 4:
          return (
            <Typography variant="h4" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        case 5:
          return (
            <Typography variant="h5" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        case 6:
          return (
            <Typography variant="h6" className="mb-3" color="primary">
              {children}
            </Typography>
          );
        default:
          return (
            <Typography variant="h1" className="mb-3" color="primary">
              {children}
            </Typography>
          );
      }
    },

    link: ({ children, url }) => (
      <Link href={url}>{children}</Link>
    ),

    /* --------------------------------
       ✅ LIST SUPPORT (NEW)
    ---------------------------------*/
    list: ({ children, format }) => {
      const ListTag = format === "ordered" ? "ol" : "ul";

      return (
        <ListTag className="mb-3 pl-5 list-disc">
          {children}
        </ListTag>
      );
    },

    "list-item": ({ children }) => (
      <li className="mb-3">
        {children}
      </li>
    ),
  };

  /* --------------------------------
     Named Renderers Mapping
  ---------------------------------*/
  const namedRenderers = {
    paragraph: defaultRenderers.paragraph,
    heading: defaultRenderers.heading,
    link: defaultRenderers.link,
    list: defaultRenderers.list,
    "list-item": defaultRenderers["list-item"],
  };

  /* --------------------------------
     Text Modifiers (Bold, Italic)
  ---------------------------------*/
  const namedModifiers = {
    bold: ({ children }) => <strong>{children}</strong>,
    italic: ({ children }) => <em>{children}</em>,
  };

  /* --------------------------------
     Resolve Custom Blocks
  ---------------------------------*/
  const resolvedBlocks = { ...defaultRenderers };

  if (blocks && typeof blocks === "object") {
    Object.keys(blocks).forEach((key) => {
      const val = blocks[key];
      if (typeof val === "string" && namedRenderers[val]) {
        resolvedBlocks[key] = namedRenderers[val];
      }
    });
  }

  /* --------------------------------
     Resolve Custom Modifiers
  ---------------------------------*/
  const resolvedModifiers = {};

  if (modifiers && typeof modifiers === "object") {
    Object.keys(modifiers).forEach((key) => {
      const val = modifiers[key];
      if (typeof val === "string" && namedModifiers[val]) {
        resolvedModifiers[key] = namedModifiers[val];
      }
    });
  }

  /* --------------------------------
     Render Strapi Blocks
  ---------------------------------*/
  return (
    <BlocksRenderer
      content={content}
      blocks={resolvedBlocks}
      modifiers={
        Object.keys(resolvedModifiers).length
          ? resolvedModifiers
          : undefined
      }
    />
  );
}
