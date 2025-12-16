"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadMore } from "../shared/Button/Button";
import { getMediaUrl } from "../lib/api";
import { CardDescription } from "../../components/ui/card";
function extractPlainText(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph" && block.children) {
        return block.children.map((child) => child.text || "").join("");
      }
      return "";
    })
    .join(" ");
}

// Helper to truncate text
function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
export default function TreatmentsClient({ services }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "";
  const [filteredServices, setFilteredServices] = useState([]);
  useEffect(() => {
    if (categoryParam) {
      const filtered = services.filter(
        (service) =>
          service.service_category &&
          service.service_category.Name.toLowerCase() ===
            categoryParam.toLowerCase()
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [categoryParam, services]); 


  useEffect(() => {
    if (filteredServices.length === 0 && categoryParam) {
      router.push("/services");
    }
  }, [filteredServices, categoryParam, router]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {filteredServices?.map((treatment, index) => {
          const treatmentImage = getMediaUrl(treatment?.Cover);
          const plainText = extractPlainText(treatment?.Body);
          const truncatedText = truncateText(plainText, 125); 
          return (
            <Card
              className="bg-white border-0 flex-1 flex flex-col overflow-hidden"
              key={index}
            >
              <CardHeader className="p-0">
                <img
                  className="w-full h-full object-cover"
                  src={treatmentImage}
                  alt={treatment?.Title}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-2">
                <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                  {treatment?.Title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {truncatedText && (
                    <p className="text-gray-600 text-sm leading-6 line-clamp-3">
                      {truncatedText}
                    </p>
                  )}
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
