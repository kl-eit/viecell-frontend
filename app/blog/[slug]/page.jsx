import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import { PageHeaderSetter } from "../../lib/PageHeaderContext";
import { CalendarIcon, UserIcon } from "../../shared/icons/icons";
import Typography from "../../shared/Typography/Typography";
import SectionBlock from "../../shared/Section";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const posts = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const post = posts?.[0];
  return {
    title: post?.title || 'Blog Post',
  };
}
export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const posts = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const categories = await fetchAPI(`categories`);
  const post = posts?.[0];
  const recentPostsData = await fetchAPI(
    `articles?sort[0]=publishedAt:desc&pagination[limit]=3&filters[slug][$ne]=${slug}`
  );
  const recentPosts = recentPostsData || [];
  console.log(posts,'categories')
  return (
    <>
      <PageHeaderSetter title="Blog Details" breadcrumbLast="Blog Details" />
      <SectionBlock>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <article className="grid gap-4">
              <div className="relative w-full">
                {post?.cover && (
                  <img
                    src={getMediaUrl(post.cover)}
                    alt={post?.title}
                    width={post.cover.width || 800}
                    height={post.cover.height || 400}
                    className="w-full"
                  />
                )}
                   <div className="flex gap-3 mb-2 absolute bottom-2 px-4">
                {post?.blog_categories?.map((category) =>{ 
                  return(
                  <div key={category.id}>
                    <Link
                      className="text-xs text-lime-900 font-['Roboto_Condensed'] bg-lime-100 px-3 py-1 rounded-2xl"
                      href={`/category/${category?.slug}`}
                    >
                      {category?.name}
                    </Link>
                  </div>
                )})}
              </div>
              </div>
           
              <div className="flex flex-col h-full gap-4">
                <Typography
                  title={post?.title}
                  headingLevel="h2"
                  size="xl"
                  color="primary"
                  LineHeading={true}
                />
                <div className="flex items-center md:divide-x divide-black/10  text-lime-900 text-xs font-normal font-['Roboto'] capitalize leading-4">
                  <div className="w-auto pr-3 flex items-center gap-2">
                    <UserIcon aria-label="UserIcon" />
                    {post?.author?.name || "VieCells"}
                  </div>
                  <div className="flex-1 px-3 flex items-center gap-2">
                    <CalendarIcon
                      size={16}
                      role="img"
                      aria-label="Open calendar"
                    />
                    <time dateTime={post?.publishedAt} itemProp="datePublished">
                      {new Date(post?.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                <div className="prose prose-lg max-w-full text-lime-900 font-['Roboto']">
                  {post?.Body && <BlocksRenderer content={post.Body} />}
                </div>
                <div className="prose prose-lg max-w-full text-lime-900 font-['Roboto']">
                  {post?.ckeditor && (
                    <div dangerouslySetInnerHTML={{ __html: post.ckeditor }} />
                  )}
                </div>
              </div>
            </article>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <div className="grid gap-6 p-6 bg-[#F4F8F4] rounded-2xl">
              <div className="block text-lime-900 text-lg font-semibold  leading-6">
                Recent Posts
              </div>

              <div className="recentPosts flex flex-col gap-3">
                {recentPosts.map((post) => (
                  <div key={post.id} className="grid grid-cols-12 gap-4">
                    {post?.cover && (
                      <div className="mb-4 overflow-hidden rounded-lg col-span-12 md:col-span-4">
                        <img
                          src={getMediaUrl(post.cover)}
                          alt={post?.title}
                          width={post.cover.width || 400}
                          height={post.cover.height || 200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="col-span-12 md:col-span-8 flex flex-col gap-2">
                      <Link href={`/blog/${post?.slug}`}>
                        <Typography
                          title={post?.title}
                          headingLevel="h3"
                          size="xs"
                          color="primary"
                        />
                      </Link>
                      <div className="flex items-center text-lime-900 text-xs font-normal font-['Roboto'] capitalize leading-4">
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 p-6 bg-[#F4F8F4] rounded-2xl">
              <div className="block text-lime-900 text-lg font-semibold  leading-6">
                Categories
              </div>
              <ul className="flex flex-col w-full space-y-2 text-[14px] gap-1">
                {categories?.map((cat) => {
                  return (
                    <li key={cat?.id} className="mb-2 w-full">
                      <Link
                        href={`/category/${cat?.slug}`}
                        className={`flex w-full px-3 rounded-lg py-2 bg-white text-lime-800`}
                      >
                        {cat?.name}
                        {/* <span className="icon-arrow-right ms-auto">
                            <ArrowRightIcon size={12} />
                          </span> */}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
