"use client";
import { motion } from "framer-motion";
import { Calendar, X } from "lucide-react";
import HeroSection from "../shared/HeroSection/HeroSection";
import CTASection from "../component/CTASection/CTASection";
import SectionBlock from "../shared/Section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
export default function page() {
  const pressItems = [
    {
      id: 1,
      image: "/press/et-changemakers-1.jpg",
      title: "ET Changemakers - Viecell Institute of Regenerative Medicine",
      publication: "Economic Times",
      date: "",
      category: "award",
    },
    {
      id: 2,
      image: "/press/times-changemakers-1.jpg",
      title: "Times Changemakers - Viecell Institute Recognition",
      publication: "Surat Times",
      date: "",
      category: "award",
    },
    {
      id: 3,
      image: "/press/press-1.jpg",
      title: "ભારતનું અગ્રણી સંકલિત રિજનરેટિવ મેડિસિન સેન્ટર",
      publication: "Viecell Institute Coverage",
      date: "",
      category: "newspaper",
    },
    {
      id: 4,
      image: "/press/press-2.jpg",
      title:
        "ત્રણ-ત્રણ વાર આપઘાતનો પ્રયાસ કરનાર દર્દી - સેલ થેરાપીથી સાજા થઈ ગયા",
      publication: "Gujarat Samachar",
      date: "",
      category: "newspaper",
    },
    {
      id: 5,
      image: "/press/press-3.jpg",
      title: "'સેલ થેરાપી' થી મળ્યું નવજીવન : ગરીબ દર્દી મરતાં બચ્યો",
      publication: "Gujarat Daily",
      date: "",
      category: "newspaper",
    },
    {
      id: 6,
      image: "/press/press-4.jpg",
      title: "'સ્ટેમ સેલ થેરાપી' મોર્ડન મેડીસીનનો ચમત્કાર નહીં વાસ્તવિકતા",
      publication: "Business News",
      date: "",
      category: "newspaper",
    },
    {
      id: 7,
      image: "/press/press-5.jpg",
      title: "ઓસ્ટ્રેલિયન યુવાનને સુરતમાં મળ્યું નવજીવન",
      publication: "Gujarat Times",
      date: "",
      category: "newspaper",
    },
    {
      id: 8,
      image: "/press/press-6.jpg",
      title: "કીમોથેરાપી વિના મહિલાનું બ્રેસ્ટ કેન્સર કાબુમાં",
      publication: "Gujarat Samachar",
      date: "",
      category: "newspaper",
    },
    {
      id: 9,
      image: "/press/press-7.jpg",
      title: "રોગોની સારવારમાં 'સ્ટેમ સેલ થેરાપી' ઉત્તમ કઈ રીતે?",
      publication: "Health Magazine",
      date: "",
      category: "magazine",
    },
    {
      id: 10,
      image: "/press/press-8.jpg",
      title: "બાંગ્લાદેશના બ્યુરોક્રેટની વાયસેલમાં સફળ સારવાર",
      publication: "International Coverage",
      date: "",
      category: "newspaper",
    },
    // {
    //   id: 11,
    //   videoUrl: "https://www.youtube.com/embed/yC6-RKfKWZ4",
    //   title: "Viecell Institute YouTube Feature",
    //   publication: "YouTube Channel",
    //   date: "",
    //   category: "video",
    // },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems =
    filter === "all"
      ? pressItems
      : pressItems.filter((item) => item.category === filter);

  let clickTimer = null;

  const handleImageClick = () => {
    if (clickTimer) return;
    clickTimer = setTimeout(() => {
      setIsZoomed(true);
      clickTimer = null;
    }, 200);
  };

  const handleImageDoubleClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
    }
    setIsZoomed(false);
  };

  const getYoutubeThumbnail = (url) => {
    try {
      const regExp =
        /^.*(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|embed\/))([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = match && match[4].length === 11 ? match[4] : null;
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : "/press/youtube-thumb.jpg";
    } catch (error) {
      return "/press/youtube-thumb.jpg";
    }
  };
  const pressFilters = [
    { key: "all", label: "All Coverage" },
    // dynamically get categories from pressItems
    ...Array.from(new Set(pressItems.map((item) => item.category))).map(
      (category) => ({
        key: category,
        label:
          category === "newspaper"
            ? "Newspapers"
            : category === "magazine"
              ? "Magazines"
              : category === "award"
                ? "Awards & Recognition"
                : category === "video"
                  ? "Videos"
                  : category,
      }),
    ),
  ];

  return (
    <div>
      <HeroSection
        title="Press Coverage"
        description="Explore our featured news articles, media coverage, and recognition in leading publications for our pioneering work in regenerative medicine."
      />

      {/* Filter Buttons */}
      <SectionBlock>
        <div className="flex flex-wrap justify-center gap-3">
          {pressFilters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab.key
                  ? "bg-lime-900 text-white"
                  : "bg-[#F3F5EC] text-lime-900 hover:bg-[#F3F5EC]/90 hover:text-lime-900/80 cursor-pointer"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </SectionBlock>

      {/* Press Grid */}
      <SectionBlock
        className="text-lime-900 bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)]"
        rounded
      >
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  {item?.videoUrl ? (
                    <div className="relative w-full h-full group cursor-pointer">
                      <img
                        src={
                          item?.thumbnail || getYoutubeThumbnail(item?.videoUrl)
                        }
                        alt={item?.title}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors rounded-2xl">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 2v20l18-10L4 2z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-800">
                      {item?.category === "award"
                        ? "🏆 Award"
                        : item?.category === "magazine"
                          ? "📖 Magazine"
                          : item?.category === "video"
                            ? "🎬 Video"
                            : "📰 News"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-md mb-2 line-clamp-2 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{item?.publication}</span>
                    {item?.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => {
            setSelectedItem(null);
            setIsZoomed(false);
          }}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-neutral-900">
            {selectedItem && (
              <>
                <VisuallyHidden>
                  <DialogTitle>{selectedItem?.title}</DialogTitle>
                </VisuallyHidden>
                <div className="relative">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {selectedItem?.videoUrl ? (
                    <div
                      className="relative w-full max-h-[85vh]"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={selectedItem?.videoUrl}
                        title={selectedItem?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={selectedItem?.image}
                      alt={selectedItem?.title}
                      draggable={false}
                      onClick={handleImageClick}
                      onDoubleClick={handleImageDoubleClick}
                      style={{ transformOrigin: "center center" }}
                      className={`w-full max-h-[85vh] object-contain select-none
                        bg-gray-100 dark:bg-neutral-800
                        transition-transform duration-300 ease-in-out
                        ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}
                      `}
                    />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 to-transparent">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {selectedItem?.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {selectedItem?.publication} • {selectedItem?.date}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </SectionBlock>
      <CTASection />
    </div>
  );
}
