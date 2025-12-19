import Link from "next/link";
import { fetchAPI, getMediaUrl } from "../lib/api";
import { PageHeaderSetter } from "../lib/PageHeaderContext";
import SectionBlock from "../shared/Section";
import { ReadMore } from "../shared/Button/Button";
import { CalendarIcon, UserIcon } from "../shared/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
export default async function BlogPage() {
  const posts = await fetchAPI("articles");
  return (
    <>
      <PageHeaderSetter title="Blog" />
      <SectionBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {posts?.map((post) => (
            <div key={post?.id}>
              <Card
               
                className="bg-white border-0 flex-1 flex flex-col overflow-hidden h-[calc(100%-10px)] mb-5"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {post?.cover && (
                  <div className="relative w-full">
                    <img
                      src={getMediaUrl(post?.cover)}
                      alt={post?.title}
                      width={post?.cover.width}
                      height={post?.cover.height}
                    />
                  </div>
                )}

                <CardContent className="p-5 flex flex-col h-full gap-3">
                  <div className="flex items-center md:divide-x divide-black/10  text-lime-900 text-xs font-normal font-['Roboto'] capitalize leading-4">
                    <div className="w-auto pr-3 flex items-center gap-2">
                      <UserIcon aria-label="UserIcon" />
                      {post?.author?.name || "VieCells"}
                    </div>
                    {/* <div className="flex-1 px-3 flex items-center gap-2">
                      <CalendarIcon
                        size={16}
                        role="img"
                        aria-label="Open calendar"
                      />

                      <time
                        dateTime={post?.publishedAt}
                        itemProp="datePublished"
                      >
                        {new Date(post?.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div> */}
                  </div>

                  {/* {post?.blog_categories && (
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 w-fit">
                      {post?.blog_categories}
                    </span>
                  )} */}
                  <CardTitle className="text-lime-900 leading-normal">
                    {post?.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-500">
                    {post?.description || post?.excerpt}
                  </CardDescription>

                  <div className="mt-auto">
                    <ReadMore href={`/blog/${post?.slug}`} showArrow />
                  </div>
                </CardContent>

                <meta itemProp="image" content={post?.image} />
                <meta
                  itemProp="author"
                  content={post?.author?.name || "VieCells"}
                />
              </Card>
            </div>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}
