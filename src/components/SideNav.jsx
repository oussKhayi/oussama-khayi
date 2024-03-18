import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

export const SideNav = () => {
  return (
    <div className="p-11 px-28 text-white w-full">
      <h1 className="text-[#c4d0ec] uppercase text-5xl  font-bold">
        khayi oussama
      </h1>
      <h4 className="text-2xl my-3 font-semibold capitalize text-gray-300">
        Junior Full stack Engineer
      </h4>
      <p className="text-gray-400 w-[70%] lowercase first-letter:capitalize">
        A Junior Web Developer Building The Frontend And Backend Of Websites And
        Web Applications That Leads To The Success Of The Overall project
      </p>
      <div className="links p-2 grid relative top-14 mb-16">
        {/* <div className="links-bg absolute bg-red-200 z-10 p-40 animate-pulse bg-opacity-5 rounded-full"></div> */}
        <a
          href="#about"
          className="a-link flex relative py-4 w-[140px] mb-3 text-gray-400 group "
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-4 border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase group-hover:text-teal-300 group-hover:start-20 font-2">
            about
          </p>
        </a>
        <a
          href="#experience"
          className="a-link flex relative py-4 w-[140px] text-gray-400 group hover:text-teal-300 mb-3"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-4 border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            experience
          </p>
        </a>
        <a
          href="#skills"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-4 border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]    "></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            skills
          </p>
        </a>
        <a
          href="#projects"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-4 border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]    "></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            projects
          </p>
        </a>
        {/* <a href="#experience">experience</a>
        <a href="#project">project</a>
        <a href="#skills">skills</a> */}
      </div>
      <div className="contacts flex p-2 gap-x-6">
        <a
          className="contact"
          href="http://linkedin.com/in/ousskhayi"
          target="_blank"
        >
          <BsLinkedin
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a className="contact" href="http://">
          <BsInstagram
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a className="contact" href="http://">
          <BsTwitterX
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a className="contact" href="http://">
          <BsWhatsapp
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
      </div>
    </div>
  );
};
