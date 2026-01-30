"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import Section from "../Section";
import Icon, { CalendarIcon, UserIcon } from "../icons/icons";
import Button, { ReadMore } from "../../component/Button/Button";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import Typography from "../Typography/Typography";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import {
  Card,
  CardContent,
  CardTitle,
} from "../../../components/ui/card";
import { useEffect, useRef, useState } from "react";
import CarouselNav from "../CarouselNav/CarouselNav";
export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const paginationRef = useRef(null);
  useEffect(() => {
    fetchAPI("articles?pagination[limit]=6&sort=Date:desc").then(
      (data) => setPosts(data),
    );
  }, []);
  console.log(posts, "posts");
  return (
    <Section mode="light">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-8">
          <Typography
            title="Latest Insights"
            headingLevel="h2"
            size="xl"
            color="primary"
            LineHeading
            subtitle="Latest news, tips, and insights on health, wellness, and regenerative medicine."
          />
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
          <Link href="/blogs">
            <Button icon>View All</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full min-w-0">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ el: paginationRef.current, clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
            swiper.params.pagination.el = paginationRef.current;
          }}
          className="pb-10 h-full mb-2 w-full"
        >
          {posts?.map((post) => {
            const imageUrl = getMediaUrl(post?.cover?.url);
            return (
              <SwiperSlide key={post?.id} className="flex p-1">
                <Card
                  key={post.id}
                  className="bg-white border-0 flex-1 flex flex-col overflow-hidden h-[calc(100%-10px)] mb-5 relative"
                >
                  {post?.cover ? (
                    <div className="relative w-full">
                      <Image
                        src={getMediaUrl(post?.cover)}
                        alt={post?.title}
                        width={post?.cover.width}
                        height={post?.cover.height}
                        priority
                        className="aspect-4/2 object-cover"
                         unoptimized
                      />
                    </div>
                  ) : (
                    <div className="aspect-4/2 w-full bg-[linear-gradient(270deg,#F3F5EC_0%,#FFFFFF_49.77%,#F3F5EC_100%)]"></div>
                  )}
                  <CardContent className="p-5 flex flex-col h-full gap-3">
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
                    {post?.category && (
                      <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 w-fit">
                        {post?.category}
                      </span>
                    )}
                    <CardTitle className="text-lime-900 leading-normal">
                   {post?.title?.length > 80
                              ? post?.title.slice(0, 80) + "…"
                              : post?.title}
                    </CardTitle>
                    {/* <CardDescription className="text-neutral-500">
                      {post?.description || post.excerpt}
                    </CardDescription> */}
                    <div className="mt-auto">
                      <ReadMore href={`/blogs/${post?.slug}`} showArrow />
                    </div>
                  </CardContent>
                  <meta
                    itemProp="author"
                    content={post?.author?.name || "VieCells"}
                  />
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <CarouselNav paginationRef={paginationRef} />
    </Section>
  );
}
