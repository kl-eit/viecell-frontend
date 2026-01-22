"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useIsMobile from "../../lib/useIsMobile";
import { treatmentData } from "./treatmentData";
import { ArrowRightIcon } from "../icons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography, { TextDescription } from "../Typography/Typography";
import Link from "next/link";
export default function FilterTabs() {
  const [selectedCountry, setSelectedCountry] = useState(
    treatmentData?.countries[0],
  );
  const [selectedDisease, setSelectedDisease] = useState(
    treatmentData?.countries[0].diseases[0],
  );
  const [selectedHospital, setSelectedHospital] = useState(
    treatmentData?.countries[0].diseases[0].hospitals[0],
  );
  const handleCountryChange = (countryName) => {
    const country = treatmentData?.countries.find(
      (c) => c.name === countryName,
    );
    if (!country) return;
    setSelectedCountry(country);
    setSelectedDisease(country?.diseases[0]);
    setSelectedHospital(country?.diseases[0].hospitals[0]);
  };
  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
    setSelectedHospital(disease.hospitals[0]);
  };
  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
  };
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("/api/get-country");
        if (!res.ok) {
          console.error("API not found, status:", res.status);
          return;
        }
        const json = await res.json();
        const country = json.country || json.country_name || json.countryName;
        console.log("Detected:", country);
        const matched = treatmentData?.countries.find(
          (c) => c.name.toLowerCase() === country.toLowerCase(),
        );
        if (matched) {
          setSelectedCountry(matched);
          setSelectedDisease(matched.diseases[0]);
          setSelectedHospital(matched.diseases[0]?.hospitals[0]);
        } else {
          const usa = treatmentData?.countries.find((c) => c.name === "USA");
          if (usa) {
            setSelectedCountry(usa);
            setSelectedDisease(usa.diseases[0]);
            setSelectedHospital(usa.diseases[0]?.hospitals[0]);
          }
        }
      } catch (err) {
        console.error("Country detect error:", err);
      }
    };
    fetchCountry();
  }, []);

  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isHome  = pathname === "/";
  return (
    <>
      {!isHome ? (
        <div className="flex flex-col gap-3">
          <Typography
            title={`India vs.  ${selectedCountry?.name} – Treatment Comparison`}
            headingLevel="h2"
            size="xl"
            color="primary"
            align="center"
          />
          <div className="max-w-2xl mx-auto">
            <TextDescription
              className="text-lime-900 text-center center"
              text={
                "Use this comparison to evaluate treatment options and make an informed medical decision."
              }
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6">
            <Typography
              title="Why Choose India for Regenerative Medicine"
              headingLevel="h2"
              size="xl"
              color="primary"
              LineHeading={true}
            />
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-start lg:justify-end">
            <TextDescription>
              See why India (VieCell) offers world-class regenerative <br />
              care at globally affordable costs.
            </TextDescription>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-lime-900 text-md font-semibold font-['Roboto_Condensed'] capitalize leading-6">
            Clinic Comparison Results
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-lime-900 text-md font-semibold font-['Roboto_Condensed']">
              Filters
            </span>

            <Select
              className="bg-white"
              value={selectedCountry?.name}
              onValueChange={handleCountryChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-60 overflow-y-auto">
                {treatmentData?.countries.map((country) => (
                  <SelectItem key={country?.name} value={country?.name}>
                    {country?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isMobile && (
              <>
                <Select
                  value={selectedDisease.id}
                  onValueChange={(value) => {
                    const disease = selectedCountry?.diseases.find(
                      (d) => d.id === value,
                    );
                    handleDiseaseClick(disease);
                  }}
                >
                  <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-lime-900 focus:ring-2 focus:ring-lime-900">
                    <SelectValue placeholder="Select Disease" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-lime-900">
                    {selectedCountry?.diseases.map((disease) => (
                      <SelectItem key={disease?.id} value={disease?.id}>
                        {disease?.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedHospital.name}
                  onValueChange={(value) => {
                    const hospital = selectedDisease?.hospitals.find(
                      (h) => h.name === value,
                    );
                    handleHospitalClick(hospital);
                  }}
                >
                  <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-lime-900 focus:ring-2 focus:ring-lime-900">
                    <SelectValue placeholder="Select Hospital" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-lime-900 ">
                    {selectedDisease.hospitals.map((hospital) => (
                      <SelectItem key={hospital.name} value={hospital?.name}>
                        {hospital?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex">
            {!isMobile && (
              <div className="w-64 bg-[#F4F8F4]">
                <ul className="divide-y divide-gray-300 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                  {selectedCountry.diseases.map((disease) => (
                    <li
                      key={disease.id}
                      onClick={() => handleDiseaseClick(disease)}
                      className={`px-5 py-3 border-l-[3px] ${
                        selectedDisease.id === disease?.id
                          ? "border-lime-900 text-lime-90"
                          : "border-l-transparent"
                      } cursor-pointer transition-all duration-200`}
                    >
                      {disease?.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <main className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10 gap-0 min-h-full">
                {!isMobile && (
                  <div>
                    <div className="px-4 py-3 border-b border-black/10">
                      <div className="text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                        Hospital/Clinic Name
                      </div>
                    </div>
                    <div className="px-4">
                      <ul className="flex flex-col w-full text-xs divide-y divide-dashed divide-gray-300 [&>li]:py-3 [&>li]:cursor-pointer">
                        {selectedDisease.hospitals.map((hospital, idx) => (
                          <li
                            key={idx}
                            className={`w-full flex justify-between items-center ${
                              selectedHospital?.name === hospital.name
                                ? "text-lime-900"
                                : ""
                            }`}
                          >
                            <span onClick={() => handleHospitalClick(hospital)}>
                              {hospital?.name}
                            </span>
                            <span>
                              <ArrowRightIcon size={10} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {selectedHospital?.features.length > 0 &&
                  selectedHospital.features.map(
                    (feature, idx) =>
                      Object.entries(feature).length > 0 && (
                        <div key={idx}>
                          <div className="px-4 py-3 border-b border-black/10 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                            Feature
                          </div>
                          <div className="px-4">
                            <ul className="flex flex-col w-full text-xs divide-y divide-dashed divide-gray-300 [&>li]:py-3 [&>li]:cursor-pointer">
                              {Object.entries(feature).map(([key, value]) => (
                                <li
                                  key={key}
                                  className="w-full flex justify-between items-center"
                                >
                                  {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                                  <span>
                                    <ArrowRightIcon size={10} />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ),
                  )}
                {selectedHospital?.features.length > 0 &&
                  selectedHospital?.features.map(
                    (feature, idx) =>
                      Object.entries(feature).length > 0 && (
                        <div key={idx}>
                          <div className="px-4 py-3 border-b border-black/10 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                            vs.
                            {selectedCountry?.name}
                          </div>
                          <div className="px-4">
                            <ul className="flex flex-col w-full divide-y divide-dashed divide-gray-300 [&>li]:py-3 [&>li]:cursor-pointer text-xs">
                              {Object.entries(feature).map(([key, value]) => (
                                <li
                                  key={key}
                                  className="w-full flex justify-between items-center py-1"
                                >
                                  <span>{value}</span>

                                  <span className="shrink-0">
                                    <ArrowRightIcon size={10} />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ),
                  )}
                <div className="bg-[#F4F8F4]/60">
                  <div className="px-4 py-3 border-b border-black/10 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                    India (VieCell)
                  </div>
                  <div className="px-4">
                    <ul className="flex flex-col w-full text-xs divide-y divide-dashed divide-gray-300 [&>li]:py-3 [&>li]:cursor-pointer">
                      <li>
                        Liver Failure, Kidney Failure, Neurological, Heart
                        Failure, Orthopedic
                      </li>
                      <li>10000-15000</li>
                      <li>1786</li>
                      <li>
                        Intravenous, Intrathecal, Local Injection,
                        Trans-arterial
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      {!isHome ? (
        <div className="text-sm text-center bg-[#F4F8F4] py-2 px-10 rounded-[30px]  text-[#2D4213] font-normal">
          This comparison is for informational purposes and helps you evaluate
          clinics based on key treatment factors.
        </div>
      ) : (
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-2.5 
            bg-[#F4F8F4] p-2.5 md:p-5 rounded-[30px] 
            text-[#2D4213] font-normal leading-6"
        >
          Experience world-class quality at globally affordable costs
          <div className="inline-flex items-center gap-2 text-[#647252] underline leading-6">
            <Link href="/compare-treatment">
              Compare Treatment Options <ArrowRightIcon />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
