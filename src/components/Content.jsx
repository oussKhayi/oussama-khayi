import React from "react";
import data from "../data.json";

export const Content = () => {
  return (
    <div className="bg-[#0f1830] p-6 ps-12 pt-0 w-full rounded-2xl overflow-y-scroll no-scrollbar">
      <div className="p-16 text-gray-300 pt-11" id="about">
        <h3 className="text-2xl font-bold pb-2 capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          About me
        </h3>
        I'm A{" "}
        <p className="inline-grid font-extrabold-g.rid text-[#54d2d4]">
          Junior Web Developer
        </p>{" "}
        And <p className="inline-grid text-[#54d2d4]">Web Applications</p> That
        Leads To The Success Of The Overall{" "}
        <p className="inline-grid text-[#54d2d4]">project</p>. Check Out Some Of
        My Work In The <p className="inline-grid text-[#54d2d4]">Projects</p>{" "}
        Section. I Also Like Sharing Content Related To what I Have Learned Over
        The Years In Web Development. Feel Free To Connect Or Follow Me On
        MyProjects <p className="inline-grid text-[#54d2d4]">Linkedin</p> Where
        I Post Useful Content Related To{" "}
        <p className="inline-grid text-[#54d2d4]">Web Development</p> And{" "}
        <p className="inline-grid text-[#54d2d4]">Programming</p>.
      </div>
      <div className="px-16 text-gray-400 py-2 pb-8" id="experience">
        <h3 className="text-2xl font-bold pb-2 capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my experience
        </h3>
        {data.experience.map((exp, index) => {
          return (
            <div
              className="mb-4 card p-2 mt-3  border-[#0f1830] border hover:border-[#50fcff5d] hover:bg-[#54d2d40b] hover:border rounded-lg group hover:scale-105 bg-white"
              key={index}
            >
              <div className="flex gap-x-4">
                <div className="min-w-fit">
                  <p className="min-w-fit">{exp.startDate}</p>
                  <p className="min-w-fit">{exp.endDate}</p>
                </div>
                <p className="experience-desc text-sm group-hover:text-gray-300">
                  <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                    {exp.title}
                  </h4>
                  {exp.description}
                  <div className="flex gap-x-3 pt-2">
                    {exp.technologies.map((tech, index) => {
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
          );
        })}
      </div>
      <div className="px-16 text-gray-400 py-2 pb-8 " id="skills">
        <h3 className="text-2xl font-bold pb-2 capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my skills
        </h3>
        <h4 className="text 2xl">Front end</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 p-5 rounded-lg bg-[#54d2d40b] border border-[#50fcff5d]">
          {data.technologies["front-end"].map((tech, index) => {
            return (
              <>
                <i
                  key={index}
                  className={`${tech} cursor-pointer text-[#c4d0ec] hover:text-sky-300 text-7xl `}
                ></i>
                <i
                  key={index}
                  className={`${tech} cursor-pointer text-[#c4d0ec] hover:text-sky-300 text-7xl `}
                ></i>
              </>
            );
          })}
        </div>
      </div>
      <div className="px-16 text-gray-400 py-2 pb-8" id="projects">
        <h3 className="text-2xl font-bold pb-2 capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my projects
        </h3>
        {data.projects.map((project, index) => {
          return (
            <div className="mb-4 card p-2 mt-3  border-[#0f1830] border hover:border-[#50fcff5d] hover:bg-[#54d2d40b] hover:border rounded-lg group hover:scale-105">
              <div className="flex gap-x-4">
                <div className="date uppercase text-gray-400 text-sm font-semibold w-[80%] pt-2">
                  <img src={project.image} alt="" className="rounded" /> <br />
                  <button className="p-1 mt-1 px-6 text-sm border text-center rounded-lg w-full capitalize">
                    demo
                  </button>
                  <button className="p-1 mt-1 px-6 text-sm border text-center rounded-lg w-full capitalize">
                    source
                  </button>
                </div>
                <p className="experience-desc text-sm group-hover:text-gray-300">
                  <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                    {project.title}
                  </h4>
                  Engaged in an intensive MERN stack bootcamp at ARK-X Talent
                  Factory, Casablanca. Focused on mastering MongoDB, Express.js,
                  and Node.js for full-stack development. Learning essential
                  skills while progressing towards becoming a proficient web
                  developer.
                  <div className="flex gap-x-3 pt-2">
                    {project.technologies.map((tech, index) => {
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
          );
        })}
      </div>
    </div>
  );
};
