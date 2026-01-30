"use client";
import { useState } from "react";
import BlocksRendererClient from "../shared/BlocksRendererClient";

export default function StoriesGrid({ stories, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  // Filter stories by selected category (case-insensitive)
  const filteredStories = selectedCategory
    ? stories.filter((story) =>
        story?.testimonial_categorie?.data?.some(
          (cat) =>
            cat.name.trim().toLowerCase() ===
            selectedCategory.trim().toLowerCase()
        )
      )
    : stories;

  return (
    <>
      {/* Category Dropdown */}
      {/* <div className="ms-auto max-w-lg mb-8">
        <select
          className="w-full border rounded-lg px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div> */}
      {/* Testimonials Grid */}
      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((item) => (
            <blockquote
              key={item.id}
              className="bg-[linear-gradient(180deg,#E5F0CA_0%,#F7F9EF_100%)] text-lime-900 p-6 rounded-xl shadow text-center"
            >
              <div className="flex flex-col gap-10 text-center items-center h-full">
                <div>
                  <svg width="40" height="40" viewBox="0 0 67 50" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.7776 4.4764C17.1453 7.44602 10.2255 13.6553 8.50467 24.4614C8.03619 27.402 8.69049 25.1807 10.6704 23.6893C17.1348 18.8199 29.8452 20.5432 31.6092 31.668C35.1581 51.3619 10.6992 54.7715 3.46004 43.8943C1.77588 41.3661 0.660956 38.4149 0.259217 35.1739C-1.48514 21.0781 5.68988 8.52373 18.2943 2.62665C20.6262 1.53577 23.0837 0.682037 25.7284 0.0562297C27.0527 -0.213855 28.0145 0.512081 28.4581 1.73866C28.8337 2.78607 28.9619 3.9415 27.7776 4.4764ZM62.8192 4.4764C52.1868 7.44602 45.2657 13.6553 43.5462 24.4614C43.0777 27.402 43.732 25.1807 45.7119 23.6893C52.1764 18.8199 64.8867 20.5432 66.6494 31.668C70.1996 51.3619 45.7407 54.7715 38.5016 43.8943C36.8174 41.3661 35.7025 38.4149 35.3007 35.1739C33.5564 21.0781 40.7301 8.52373 53.3358 2.62665C55.6677 1.53577 58.1239 0.682037 60.7699 0.0562297C62.0942 -0.213855 63.056 0.512081 63.4996 1.73866C63.8752 2.78607 64.0034 3.9415 62.8192 4.4764Z"
                      fill="#2D4213"
                    ></path>
                  </svg>
                </div>            
                <div className="text-center lg:text-xl text-md font-normal font-['Roboto_Condensed'] text-lime-900 leading-1.2">
                  <BlocksRendererClient content={item?.Message || ""} />
                </div>
                <div className="mb-4 mt-auto">
                  <p className="text-lime-900 font-semibold">{item?.Name}</p>
                  {item?.Designation && (
                    <p className="text-sm">{item?.Designation}</p>
                  )}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No stories found for this category.
        </p>
      )}
    </>
  );
}
