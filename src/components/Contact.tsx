import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { LuFacebook, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 800, // Duration of the scrolling animation in milliseconds
    smooth: "easeInOutQuart", // Type of easing for the scrolling animation
  });
};

const Contact = ({
  background = "CONTACT",
  frontText = "Get In Touch",
  address = "address",
  note = "send us a note",
  follow = "follow me",
}) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-green-400 to-stone-700 overflow-hidden sm:p-4">
        <h1 className="text-[150px] text-slate-200 text-center font-semibold sm:text-6xl">
          {background}
        </h1>
        <h3 className="font-semibold text-4xl text-center relative bottom-32 sm:mt-[84px] sm:text-2xl">
          {frontText}
        </h3>
        <div className="flex justify-center gap-12 sm:flex sm:flex-col">
          <div className="flex flex-col gap-4 bg-gradient-to-b from-slate-900 to-zinc-800 border-none rounded-lg p-3 pr-5 pl-5">
            <h3 className="font-semibold text-lg text-white">
              {address.toUpperCase()}
            </h3>
            <div className="flex gap-2">
              <CiLocationOn className="fill-green-300 text-3xl relative bottom-1" />
              <p className="font-normal text-base text-white">Osun State, Nigeria</p>
            </div>
            
            <div className="flex gap-2">
              <BsFillTelephoneFill className="fill-green-500 text-2xl" />
              <p className="text-base font-normal text-white">
                +234-706-4289-990
              </p>
            </div>
            <div className="flex gap-2">
              <LuMail className="fill-green-500 text-3xl" />
              <p className="text-base font-normal text-white">
                ajiolajoel@gmail.com
              </p>
            </div>
            <div className="flex flex-col pt-4">
              <h3 className="font-semibold text-lg text-white">
                {follow.toUpperCase()}
              </h3>
              <div className="flex gap-5 pt-4">
                <a href="https://twitter.com/Jotechy">
                  {" "}
                  <LuTwitter className="fill-white text-xl" />
                </a>
                <a href="https://facebook.com/Joel Ajiola">
                  <LuFacebook className="fill-white text-xl" />
                </a>
                <a href="https://github.com/Joel0007tech">
                  <IoLogoGithub className="text-white text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/joelajiola/">
                  <LuLinkedin className="fill-white text-xl" />
                </a>
                <a href="mailto:ajiolajoel@gmail.com">
                  <LuMail className="fill-white text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gradient-to-b from-slate-900 to-zinc-800 pr-5 pl-5 rounded-lg p-3">
            <h3 className="font-semibold text-lg text-white">
              {note.toUpperCase()}
            </h3>
            <form action="" className="flex flex-col gap-4 pt-2">
              <div className="flex gap-2 sm:flex sm:flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray-500 rounded-md p-2 pr-28"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name=""
                  id=""
                  className="border border-gray-500 rounded-md p-2 pr-28"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-500 rounded-md p-2 pb-24 pr-28"
                placeholder="Tell us more about your needs"
              />

              <input
                type="submit"
                value="Send A Message ↗"
                className="text-white bg border-1 bg-gradient-to-r   from-slate-800 to-green-700 rounded-md
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500 w-fit mt-2 m-auto cursor-pointer"
              />
            </form>
          </div>
        </div>
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          className="float-right text-4xl mb-9 relative bottom-10 mr-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Contact;
