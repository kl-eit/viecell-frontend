import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import { CalendarIcon, UserIcon } from "../../shared/icons/icons";
import Typography from "../../shared/Typography/Typography";
import SectionBlock from "../../shared/Section";
import Link from "next/link";
import HeroSection from "../../shared/HeroSection/HeroSection";
import CTASection from "../../component/CTASection/CTASection";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const posts = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const post = posts?.[0];
  const title = post?.title 
    ? `${post.title} - viecells`
    : "Blog Post - viecells";
  return {
    title: title || "Blog Post",
  };
}
export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const posts = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const categories = await fetchAPI(`categories`);
  const post = posts?.[0];
  const recentPostsData = await fetchAPI(
    `articles?sort[0]=publishedAt:desc&pagination[limit]=3&filters[slug][$ne]=${slug}`,
  );
  const recentPosts = recentPostsData || [];
  const BlogDetails = [
    {
      title: post?.title,
      description: post?.description,
      createdAt: post?.createdAt,
      author: post?.author,
      blog_categories: post?.blog_categories || [],
    },
  ];
  return (
    <>
      <HeroSection
        title={post?.title}
        description="This article is written to help patients and caregivers better understand medical conditions, available treatment options, and emerging regenerative approaches. The information shared here is educational in nature and designed to support informed decision-making—not to replace professional medical advice."
        isBlogDetails={true}
        BlogDetails={BlogDetails}
      />
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
                  {post?.blog_categories?.map((category) => {
                    return (
                      <div key={category.id}>
                        <Link
                          className="text-xs text-lime-900 font-['Roboto_Condensed'] bg-lime-100 px-3 py-1 rounded-2xl"
                          href={`/category/${category?.slug}`}
                        >
                          {category?.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col h-full gap-4">
                {/* <Typography
                  title={post?.title}
                  headingLevel="h2"
                  size="xl"
                  color="primary"
                  LineHeading={true}
                /> */}
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
                    <time dateTime={post?.Date || post?.publishedAt} itemProp="datePublished">
                      {new Date(post?.Date || post?.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
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
                    <div className="mb-4 overflow-hidden col-span-4 ">
                      {post?.cover ? (
                        <img
                          src={getMediaUrl(post?.cover)}
                          alt={post?.title}
                          width={post?.cover?.width}
                          height={post?.cover?.height}
                          className="aspect-3/2 object-cover"
                        />
                      ) : (
                        <div className="aspect-3/2 w-full lg:ml-auto bg-[linear-gradient(270deg,#F3F5EC_0%,#FFFFFF_49.77%,#F3F5EC_100%)]"></div>
                      )}
                    </div>

                    <div className="col-span-8 flex flex-col gap-2">
                      <Link href={`/blogs/${post?.slug}`}>
                        <Typography
                          title={
                            post?.title?.length > 40
                              ? post.title.slice(0, 40) + "…"
                              : post?.title
                          }
                          headingLevel="h3"
                          size="xs"
                          color="primary"
                        />
                      </Link>
                      <div className="flex items-center text-lime-900 text-xs font-normal font-['Roboto'] capitalize leading-4">
                        <time
                          dateTime={post?.Date || post?.publishedAt}
                          itemProp="datePublished"
                        >
                          {new Date(post?.Date || post?.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
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
      <CTASection CTAdata />
    </>
  );
}
