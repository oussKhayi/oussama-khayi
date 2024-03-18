import React from "react";

export const Card = ({ item }) => {
  return (
    <>
      <div className="mb-4 card p-2 mt-3  border-[#0f1830] border hover:border-[#50fcff5d] hover:bg-[#54d2d40b] hover:border rounded-lg group hover:scale-105 bg-white">
        <div className="flex gap-x-4">
          <div className="min-w-fit">
            <p className="min-w-fit">{item.startDate}</p>
            <p className="min-w-fit">{item.endDate}</p>
          </div>
          <p className="experience-desc text-sm group-hover:text-gray-300">
            <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
              {item.title}
            </h4>
            {item.description}
            <div className="flex gap-x-3 pt-2">
              {item.technologies.map((tech, index) => {
                return (
                  <span
                    class="py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium  rounded-full bg-teal-500/10 text-teal-500 capitalize"
                    key={index}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </p>
        </div>
      </div>
    </>
  );
};
