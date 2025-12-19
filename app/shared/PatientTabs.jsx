"use client";
import React, { useState } from "react";
export default function PatientTabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  return (
    <div className="grid grid-cols-12 gap-6 items-center">
      <div className="col-span-12 lg:col-span-6">
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-3">
          {tabs?.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`self-stretch px-7 py-5 rounded-[20px] inline-flex justify-start items-center gap-5 w-full transition-colors duration-200 ${
                  isActive
                    ? "bg-[#E6F0CC] text-white"
                    : "bg-slate-50 text-neutral-700"
                }`}
              >
                <div className="flex-1 inline-flex flex-col justify-center items-center gap-2.5 text-left">
                  <div className="self-stretch text-lime-900 text-xl font-semibold font-['Roboto_Condensed'] leading-5">
                    {item?.title}
                  </div>
                  <div className="self-stretch text-neutral-500 text-base font-normal font-['Roboto'] leading-6">
                    {item?.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        {activeTab && (
          <img className="w-full rounded-[20px]" src={activeTabData?.image} />
        )}
      </div>
    </div>
  );
}
