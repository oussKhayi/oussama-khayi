import React from "react";
import data from "../data.json";
import { BsGithub, BsEye, BsChevronDoubleDown } from "react-icons/bs";
import {} from "react-icons/bs";

import { ContactForm } from "./ContactForm";
const RightSide = () => {
  return (
    <div
      className="right-div w-full no-scroll-bar lg:pt-8 px-2 overflow-y-scroll no-scrollbar right-menu"
      id="rightDiv"
    >
      <div
        className="text-[#afafaf] px-2 pt-8 lg:ps-2 lg:pe-20 lg:pt-8 text-sm md:text-md"
        id="about"
      >
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
      <div className="md:pe-16 text-gray-400 py-8" id="experience">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my experience
        </h3>
        <section className="relative top-4 p-1 w-full">
          <div className="p-1 w-full">
            <div className="mx-auto w-full md:max-w-6xl text-gray-500">
              <div className="grid gap-3">
                {/*  */}
                {data.experience.map((exp, index) => {
                  return (
                    <div
                      className="relative group overflow-hidden p-4 md:p-8 rounded-xl border border-gray-800 bg-primary w-full"
                      key={index}
                    >
                      <div
                        aria-hidden="true"
                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                      />
                      <div className="relative">
                        <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                          {exp.title}
                        </h4>
                        <div className="mt-2 pb-2">
                          <p className="text-gray-400 group-hover:text-gray-300 text-xs">
                            {exp.description}
                          </p>
                        </div>
                        <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                          <span className="py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium  rounded-full bg-teal-500/10 text-teal-500 capitalize text-nowrap">
                            {exp.startDate + " - " + exp.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:pe-16 text-gray-400 py-8" id="skills">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my skills
        </h3>
        <section className="relative top-4">
          <div>
            <div className="mx-auto max-w-6xl text-gray-500">
              <div className="grid  sm:grid-cols-1 gap-3 md:grid-cols-1 text-thirdly">
                {/*  */}
                Frontend
                <div className="relative group overflow-hidden lg:px-8  p-4 rounded-xl border  border-gray-800 bg-primary grid gap-y-3  grid-cols-4 gap-x-3 md:grid-cols-6  lg:grid-cols-5">
                  <div
                    aria-hidden="true"
                    className="inset-0 absolute border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-white to-white blur-2xl opacity-5 group-hover:opacity-10"
                  />
                  {data.technologies["front-end"].map((tech, index) => {
                    return (
                      <div
                        className="bg-slate-800 start-16 border border-white/15 w-fit p-4 rounded-xl before:shadow-gray-950 "
                        key={index}
                      >
                        <i className={`${tech} text-3xl`}></i>
                      </div>
                      // <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-20 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                      // </div>
                    );
                  })}
                </div>
                Backend
                <div className="relative group overflow-hidden lg:px-8  p-4 rounded-xl border  border-gray-800 bg-primary grid gap-y-3  grid-cols-4 gap-x-3 md:grid-cols-6  lg:grid-cols-5">
                  <div
                    aria-hidden="true"
                    className="inset-0 absolute border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-white to-white blur-2xl opacity-5 group-hover:opacity-10"
                  />
                  {data.technologies["back-end"].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-slate-800 start-16 border border-white/15 w-fit p-4 rounded-xl before:shadow-gray-950 "
                      >
                        <i className={`${tech} text-3xl`}></i>
                      </div>
                      // <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-20 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                      // </div>
                    );
                  })}
                </div>
                {/*  */}
                Tools
                <div className="relative group overflow-hidden lg:px-8  p-4 rounded-xl border  border-gray-800 bg-primary grid gap-y-3  grid-cols-4 gap-x-3 md:grid-cols-6  lg:grid-cols-5">
                  <div
                    aria-hidden="true"
                    className="inset-0 absolute border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-white to-white blur-2xl opacity-5 group-hover:opacity-10"
                  />
                  {data.technologies["tools"].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-slate-800 start-16 border border-white/15 w-fit p-4 rounded-xl before:shadow-gray-950 "
                      >
                        <i className={`${tech} text-3xl`}></i>
                      </div>
                      // <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-20 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                      // </div>
                    );
                  })}
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      {/*  */}
      <div className="md:pe-16 text-gray-400 py-8" id="projects">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          my projects
        </h3>
        <section className="relative top-4">
          <div>
            <div className="mx-auto max-w-6xl text-gray-500">
              <div className="grid gap-3">
                {/*  */}
                {data.projects.map((prd, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group overflow-hidden p-8 rounded-xl border  border-gray-800 bg-primary"
                    >
                      <div
                        aria-hidden="true"
                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                      />
                      <div className="flex gap-x-6 min-h-32 items-center">
                        <div className="bg-slate-400 max-w-[140px] h-fit rounded-lg relative hidden md:block">
                          <img
                            src={prd.image}
                            alt=""
                            width={"100%"}
                            className="rounded-lg project-image"
                          />

                          <div className="p-2 bg-primary bg-opacity-65 group-hover:opacity-100 absolute top-0 size-full rounded-lg gap-y-2 hidden-buttons items-center">
                            {prd.github ? (
                              <a
                                href={prd.github}
                                target="_blank"
                                className="hover:scale-105 hover:bg-opacity-50 capitalize w-full text-center border border-secondary font-semibold text-secondary bg-primary bg-opacity-25 h-fit py-1 rounded"
                              >
                                source <BsGithub className="inline-block" />
                              </a>
                            ) : null}
                            {prd.demo ? (
                              <a
                                href={prd.demo}
                                target="_blank"
                                className="hover:scale-105 hover:bg-opacity-50 capitalize w-full text-center border border-secondary font-semibold text-secondary bg-primary bg-opacity-25 h-fit py-1 rounded"
                              >
                                demo <BsEye className="inline-block" />
                              </a>
                            ) : null}
                          </div>
                        </div>
                        <div className="p-2  bg-opacity-45 md:hidden absolute right-4 w-fit gap-x-3 grid rounded-lg gap-y-2 items-center">
                          {prd.github ? (
                            <a
                              href={prd.github}
                              target="_blank"
                              className="hover:scale-105 hover:bg-opacity-50 capitalize w-full text-center border border-secondary text-secondary h-fit py-1 px-3 bg-opacity-40 rounded"
                            >
                              source <BsGithub className="inline-block" />
                            </a>
                          ) : null}
                          {prd.demo ? (
                            <a
                              href={prd.demo}
                              target="_blank"
                              className="hover:scale-105 hover:bg-opacity-50 capitalize w-full text-center border border-secondary text-secondary h-fit py-1 px-3 bg-opacity-40 rounded"
                            >
                              demo <BsEye className="inline-block" />
                            </a>
                          ) : null}
                        </div>
                        <div className="relative">
                          <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                            {prd.title}
                          </h4>
                          <div className="mt-2 pb-2">
                            <p className="text-gray-400 group-hover:text-gray-300 text-xs max-w-[70%] md:max-w-[80%] md:max-w-auto">
                              {prd.description}
                            </p>
                          </div>
                          <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            {prd.technologies.map((tech, dx) => {
                              return (
                                <span
                                  className="py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium  rounded-full bg-teal-500/10 text-teal-500 capitalize text-nowrap"
                                  key={dx}
                                >
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      {/*  */}
      <div className="md:pe-16 text-gray-400 py-8" id="contact">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          Contact me
        </h3>
        <section className="relative top-4">
          <div>
            <div className="mx-auto max-w-6xl text-gray-500">
              <div className="grid gap-3">
                {/*  */}
                <ContactForm />
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default RightSide;
