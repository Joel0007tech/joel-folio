import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
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
      <div className="bg-white sm:p-4">
        <h1 className="text-[150px] text-slate-200 text-center font-semibold sm:text-6xl">
          {background}
        </h1>
        <h3 className="font-semibold text-4xl text-center relative bottom-32 sm:mt-[84px] sm:text-2xl">
          {frontText}
        </h3>
        <div className="flex justify-center gap-12 sm:flex sm:flex-col">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-gray-600">
              {address.toUpperCase()}
            </h3>
            <p>Osun State, Nigeria</p>
            <div className="flex gap-2">
              <BsFillTelephoneFill className="fill-green-500 text-lg relative top-1" />
              <p className="text-base font-normal text-gray-500">
                +234-706-4289-990
              </p>
            </div>
            <div className="flex gap-2">
              <LuMail className="fill-green-500 text-lg relative top-1" />
              <p className="text-base font-normal text-gray-500">
                ajiolajoel@gmail.com
              </p>
            </div>
            <div className="flex flex-col pt-4">
              <h3 className="font-semibold text-lg text-gray-600">
                {follow.toUpperCase()}
              </h3>
              <div className="flex gap-2 pt-4">
                <a href="https://twitter.com/Jotechy">
                  {" "}
                  <LuTwitter className="fill-gray-400 text-xl" />
                </a>
                <a href="https://facebook.com/Joel Ajiola">
                  <LuFacebook className="fill-gray-400 text-xl" />
                </a>
                <a href="https://github.com/Joel0007tech">
                  <IoLogoGithub className="text-gray-700 text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/joelajiola/">
                  <LuLinkedin className="fill-gray-400 text-xl" />
                </a>
                <a href="mailto:ajiolajoel@gmail.com">
                  <LuMail className="fill-gray-400 text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg text-gray-600">
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
                value="Submit"
                className="text-white bg border-[3px] bg-green-500 rounded-md
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500 w-fit mt-2 m-auto"
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
