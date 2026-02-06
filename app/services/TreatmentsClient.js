"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ReadMore } from "../component/Button/Button";
import { getMediaUrl } from "../lib/api";
import Link from "next/link";

function extractPlainText(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph" && block.children) {
        return block.children.map((child) => child.text || "").join("");
      }
      return "";
    })
    .join("");
}

function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export default function TreatmentsClient({ services }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "";
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(true); 
    if (categoryParam) {
      const filtered = services.filter(
        (service) =>
          service.service_category &&
          service.service_category.slug.toLowerCase() === categoryParam.toLowerCase()
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
    setTimeout(() => setIsLoading(false), 500);
  }, [categoryParam, services]);

  useEffect(() => {
    if (filteredServices.length === 0 && categoryParam) {
      setTimeout(() => {
        router.push("/services");
      }, 1000);
    }
  }, [filteredServices, categoryParam, router]);
  const SkeletonCard = () => (
    <Card className="bg-white border-0 flex-1 flex flex-col overflow-hidden animate-pulse">
      <CardHeader className="p-0">
        <div className="bg-gray-200 aspect-3/2"></div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col gap-2">
        <CardTitle className="bg-gray-200 h-6 w-3/4 rounded"></CardTitle>
        <CardDescription className="space-y-2">
          <div className="bg-gray-200 h-4 w-full rounded"></div>
          <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
          <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
        </CardDescription>
        <div className="bg-gray-200 h-8 w-20 mt-4 rounded"></div>
      </CardContent>
    </Card>
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : filteredServices?.map((treatment, index) => {
              const treatmentImage = getMediaUrl(treatment?.Cover);
              const plainText = extractPlainText(treatment?.Hero?.Content);
              const truncatedText = truncateText(plainText, 95);
              return (
                <Card
                  className="bg-white border-0 flex-1 flex flex-col overflow-hidden group"
                  key={index}
                >
                  <CardHeader className="p-0">
                    <div className="bg-gray-200">
                      <Link
                        href={`/services/${treatment?.slug}`}
                        aria-label={`Read more about ${treatment?.Title}`}
                        title={`Read more about ${treatment?.Title}`}
                      >
                        <img
                          className="aspect-3/2 object-cover"
                          src={treatmentImage}
                          alt={treatment?.Title}
                        />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col gap-2">
                    <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                      {treatment?.Title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-lime-900 text-base">
                      {truncatedText && <p className="leading-6 line-clamp-3">{truncatedText}</p>}
                    </CardDescription>
                    <div>
                      <ReadMore href={`/services/${treatment?.slug}`} showArrow />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    </div>
  );
}
