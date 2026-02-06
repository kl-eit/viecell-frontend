"use client";
import { motion } from "framer-motion";
import { Newspaper, Calendar, ExternalLink, X } from "lucide-react";
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
      image: "/press/press-1.jpg",
      title: "ભારતનું અગ્રણી સંકલિત રિજનરેટિવ મેડિસિન સેન્ટર",
      publication: "Viecell Institute Coverage",
      date: "",
      category: "newspaper",
    },
    {
      id: 2,
      image: "/press/press-2.jpg",
      title:
        "ત્રણ-ત્રણ વાર આપઘાતનો પ્રયાસ કરનાર દર્દી - સેલ થેરાપીથી સાજા થઈ ગયા",
      publication: "Gujarat Samachar",
      date: "",
      category: "newspaper",
    },
    {
      id: 3,
      image: "/press/press-3.jpg",
      title: "'સેલ થેરાપી' થી મળ્યું નવજીવન : ગરીબ દર્દી મરતાં બચ્યો",
      publication: "Gujarat Daily",
      date: "",
      category: "newspaper",
    },
    {
      id: 4,
      image: "/press/press-4.jpg",
      title: "'સ્ટેમ સેલ થેરાપી' મોર્ડન મેડીસીનનો ચમત્કાર નહીં વાસ્તવિકતા",
      publication: "Business News",
      date: "",
      category: "newspaper",
    },
    {
      id: 5,
      image: "/press/press-5.jpg",
      title: "ઓસ્ટ્રેલિયન યુવાનને સુરતમાં મળ્યું નવજીવન",
      publication: "Gujarat Times",
      date: "",
      category: "newspaper",
    },
    {
      id: 6,
      image: "/press/press-6.jpg",
      title: "કીમોથેરાપી વિના મહિલાનું બ્રેસ્ટ કેન્સર કાબુમાં",
      publication: "Gujarat Samachar",
      date: "",
      category: "newspaper",
    },
    {
      id: 7,
      image: "/press/press-7.jpg",
      title: "રોગોની સારવારમાં 'સ્ટેમ સેલ થેરાપી' ઉત્તમ કઈ રીતે?",
      publication: "Health Magazine",
      date: "",
      category: "magazine",
    },
    {
      id: 8,
      image: "/press/press-8.jpg",
      title: "બાંગ્લાદેશના બ્યુરોક્રેટની વાયસેલમાં સફળ સારવાર",
      publication: "International Coverage",
      date: "",
      category: "newspaper",
    },
    {
      id: 9,
      image: "/press/et-changemakers-1.jpg",
      title: "ET Changemakers - Viecell Institute of Regenerative Medicine",
      publication: "Economic Times",
      date: "",
      category: "award",
    },
    {
      id: 10,
      image: "/press/times-changemakers-1.jpg",
      title: "Times Changemakers - Viecell Institute Recognition",
      publication: "Surat Times",
      date: "",
      category: "award",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
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
  return (
    <div>
      <HeroSection
        title="Press Coverage"
        description="Explore our featured news articles, media coverage, and recognition in leading publications for our pioneering work in regenerative medicine."
        //imageSrc={pageData?.hero?.imageSrc}
      />
      <SectionBlock>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: "all", label: "All Coverage" },
            { key: "newspaper", label: "Newspapers" },
            { key: "magazine", label: "Magazines" },
            { key: "award", label: "Awards & Recognition" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab?.key
                  ? "bg-lime-900 text-white"
                  : "bg-[#F3F5EC] text-lime-900 hover:bg-[#F3F5EC]/90 hover:lime-900/80 cursor-pointer"
              }`}
            >
              {tab?.label}
            </button>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        className=" text-lime-900 bg-[linear-gradient(180deg,#F3F5EC_0%,#FFFFFF_100%)]"
        rounded
      >
        <section>
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
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm font-medium flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Full Article
                      </span>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-800">
                        {item.category === "award"
                          ? "🏆 Award"
                          : item?.category === "magazine"
                            ? "📖 Magazine"
                            : "📰 News"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-md mb-2 line-clamp-2  transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{item?.publication}</span>
                      {item?.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item?.date}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => {
            setSelectedImage(null);
            setIsZoomed(false);
          }}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-neutral-900">
            {selectedImage && (
              <>
                <VisuallyHidden>
                  <DialogTitle>{selectedImage?.title}</DialogTitle>
                </VisuallyHidden>
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full  bg-black/80 text-white  flex items-center justify-center  hover:bg-black transition-colors cursor-pointer!"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <img
                    src={selectedImage?.image}
                    alt={selectedImage?.title}
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {selectedImage?.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {selectedImage?.publication} • {selectedImage?.date}
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
