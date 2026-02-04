"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Button from "../../component/Button/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchAPI, getMediaUrl } from "../../lib/api";
import { useEffect, useState } from "react";
import SectionBlock from "../Section";
import Link from "next/link";
import Typography from "../Typography/Typography";

export default function TeamMemberSection() {
  const [teamData, setTeamData] = useState({
    Title: "",
    Description: "",
    teams: [],
  });

  useEffect(() => {
    fetchAPI("team-member", "teams.Profile").then((data) => setTeamData(data));
  }, []);
  const { Title, Description, teams } = teamData;

  return (
    <SectionBlock rounded className="bg-linear-to-l from-lime-200 via-stone-100 to-lime-100">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-7">
          <Typography
            title={Title}
            headingLevel="h2"
            size="xl"
            color="primary"
            LineHeading
            subtitle={Description}
          />
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-start lg:justify-end">
          <Link href={"/team-list"}>
            <Button variant="primary" icon={true}>
              Meet Our Medical Experts
            </Button>
          </Link>
        </div>
      </div>

      {/* Swiper */}
      <div className="block w-full min-w-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          pagination={{ el: ".teamMember-pagination", clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            540: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-10 h-full"
        >
          {teams?.map((team) => {
            const imageUrl = getMediaUrl(team?.Profile);

            return (
              <SwiperSlide key={team?.id} className="flex">
                <Card className="bg-white border-0 flex-1 flex flex-col h-[calc(100%-10px)] mb-2.5 overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      className="w-full h-full object-cover"
                      src={imageUrl}
                      alt={team?.Name}
                    />
                  </CardHeader>
                  <CardContent className="gap-2 grid">
                    <CardTitle className="text-lime-900 text-lg font-bold font-['Roboto_Condensed'] capitalize leading-5">
                      {team?.Name}
                    </CardTitle>
                    <CardDescription className="text-lime-900 text-base font-normal font-['Roboto'] capitalize">
                      {team?.designation}
                    </CardDescription>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
      </div>
      <div className="d-flex mx-auto">
          <div className="teamMember-pagination w-auto! flex items-center gap-2! p-5 bg-white/60 rounded-[100px]"></div>
      </div>
       
    </SectionBlock>
  );
}

