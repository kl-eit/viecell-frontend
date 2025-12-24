"use client";
import { useState } from "react";
import { ArrowRightIcon } from "../icons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const tabs = [
  { id: "Autoimmune", label: "Autoimmune" },
  { id: "Cancer", label: "Cancer" },
  { id: "Hair-Anti-Aging", label: "Hair & Skin & Anti-Aging" },
  { id: "Heart", label: "Heart" },
  { id: "Infertility", label: "Infertility" },
  { id: "Lungs", label: "Lungs" },
  { id: "M&D", label: "M&D" },
  { id: "Multiple", label: "Multiple" },
  { id: "Osteoarthritis", label: "Osteoarthritis" },
  { id: "Viecell", label: "Viecell" },
];

export const data = {
  countries: [
    {
      name: "Iran",
      diseases: [
        {
          id: "Cancer",
          label: "Cancer",
          hospitals: [
            {
              name: "Royan Institute - Tehran",
              features: [
                {
                  DiseasesTreated:
                    "Osteoarthritis, Heart Failure, Corneal Injury, Vitiligo, Wrinkles/Acne Scars",
                  CostRangeUSD: "15000-21000",
                  CostPerDay: "4500",
                  DeliveryMethods: "Intravenous Infusion, Local Injection",
                },
              ],
            },
            {
              name: "Diabetes Care Center",
              features: [
                {
                  DiseasesTreated:
                    "Liver Cirrhosis, Kidney Failure, Neurological, Cardiac, Orthopedic",
                  CostRangeUSD: "10000-15000",
                  CostPerDay: "0",
                  DeliveryMethods:
                    "Intravenous, Intrathecal, Local Injection, Trans-arterial",
                },
              ],
            },
          ],
        },
        {
          id: "Heart",
          label: "Heart",
          hospitals: [
            {
              name: "Heart Center - Tehran",
              features: [
                {
                  DiseasesTreated:
                    "Cardiac Arrhythmias, Coronary Artery Disease",
                  CostRangeUSD: "20000-30000",
                  CostPerDay: "5000",
                  DeliveryMethods: "Surgery, Medication",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "USA",
      diseases: [
        {
          id: "Cancer",
          label: "Cancer",
          hospitals: [
            {
              name: "Mayo Clinic - Rochester",
              features: [
                {
                  DiseasesTreated:
                    "Heart Disease, Coronary Artery Disease, Arrhythmias",
                  CostRangeUSD: "25000-35000",
                  CostPerDay: "5500",
                  DeliveryMethods:
                    "Intravenous Infusion, Local Injection, Surgery",
                },
              ],
            },
          ],
        },
        {
          id: "Infertility",
          label: "Infertility",
          hospitals: [
            {
              name: "Fertility Clinic - New York",
              features: [
                {
                  DiseasesTreated:
                    "Infertility, Endometriosis, Polycystic Ovary Syndrome",
                  CostRangeUSD: "15000-25000",
                  CostPerDay: "4000",
                  DeliveryMethods: "IVF, IUI",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Germany",
      diseases: [
        {
          id: "Lungs",
          label: "Lungs",
          hospitals: [
            {
              name: "Charité University Hospital - Berlin",
              features: [
                {
                  DiseasesTreated: "Lung Cancer, Pneumonia, Asthma, COPD",
                  CostRangeUSD: "18000-25000",
                  CostPerDay: "4000",
                  DeliveryMethods:
                    "Intravenous Infusion, Local Injection, Surgery",
                },
              ],
            },
          ],
        },
        {
          id: "Osteoarthritis",
          label: "Osteoarthritis",
          hospitals: [
            {
              name: "University Hospital Heidelberg",
              features: [
                {
                  DiseasesTreated:
                    "Osteoarthritis, Rheumatoid Arthritis, Joint Injections",
                  CostRangeUSD: "15000-23000",
                  CostPerDay: "3800",
                  DeliveryMethods: "Joint Injections, Surgery, Medication",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function FilterTabs() {
  const [selectedCountry, setSelectedCountry] = useState(data.countries[0]);
  const [selectedDisease, setSelectedDisease] = useState(
    selectedCountry.diseases[0]
  );
  const [selectedHospital, setSelectedHospital] = useState(
    selectedCountry.diseases[0].hospitals[0]
  );

  const handleCountryChange = (countryName) => {
    const country = data.countries.find((c) => c.name === countryName);
    if (!country) return;
    setSelectedCountry(country);
    setSelectedDisease(country.diseases[0]);
    setSelectedHospital(country.diseases[0].hospitals[0]);
    console.log(country, "country");
  };

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
    setSelectedHospital(disease.hospitals[0]);
  };

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  console.log(selectedHospital, "selectedHospital");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lime-900 text-md font-semibold font-['Roboto_Condensed'] capitalize leading-6">
          Clinic Comparison Results
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-lime-900 text-md font-semibold font-['Roboto_Condensed']">Filters</span>

          <Select
            className="bg-white"
            value={selectedCountry.name}
            onValueChange={handleCountryChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {data.countries.map((country) => (
                <SelectItem key={country.name} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-64 bg-[#F4F8F4]">
            <ul className="divide-y divide-gray-300 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
              {selectedCountry.diseases.map((disease) => (
                <li
                  key={disease.id}
                  onClick={() => handleDiseaseClick(disease)}
                  className={`px-5 py-3 border-l-[3px] ${
                    selectedDisease.id === disease.id
                      ? "border-lime-900 text-lime-90"
                      : "border-l-transparent"
                  } cursor-pointer transition-all duration-200`}
                >
                  {disease.label}
                </li>
              ))}
            </ul>
          </div>
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10 gap-0">
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
                        className="w-full flex justify-between items-center"
                      >
                        <span onClick={() => handleHospitalClick(hospital)}>
                          {hospital.name}
                        </span>
                        <span>
                          <ArrowRightIcon size={10} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                    )
                )}
              {selectedHospital?.features.length > 0 &&
                selectedHospital.features.map(
                  (feature, idx) =>
                    Object.entries(feature).length > 0 && (
                      <div key={idx}>
                        <div className="px-4 py-3 border-b border-black/10 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                          vs. {"Country"}
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
                    )
                )}
              <div className="bg-[#F4F8F4]/60">
                <div className="px-4 py-3 border-b border-black/10 text-lime-900 text-sm font-semibold font-['Roboto_Condensed'] capitalize leading-6">
                  India (VieCell)
                </div>
                <div className="px-4">
                  <ul className="flex flex-col w-full text-xs divide-y divide-dashed divide-gray-300 [&>li]:py-3 [&>li]:cursor-pointer">
                    <li>
                      Liver Cirrhosis, Kidney Failure, Neurological, Cardiac,
                      Orthopedic
                    </li>
                    <li>10000-15000</li>
                    <li>0</li>
                    <li>
                      Intravenous, Intrathecal, Local Injection, Trans-arterial
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
