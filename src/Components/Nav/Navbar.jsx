import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.svg";
import logo2 from "../../images/logo/logo-footer.svg";
import side1 from "../../images/sidebar/1.jpg";
import side2 from "../../images/sidebar/2.jpg";
import side3 from "../../images/sidebar/3.jpg";
import side4 from "../../images/sidebar/4.jpg";
import side5 from "../../images/sidebar/5.jpg";
import side6 from "../../images/sidebar/6.jpg";
import NavList from "./NavList";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(true);

  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "gallery", link: "/" },
    { name: "Schedule", link: "/" },
    { name: "blog", link: "/" },
    { name: "pricing", link: "/" },
    { name: "classes", link: "/" },
    { name: "contact", link: "/" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) setSticky(true);
    else setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {/* navbar */}
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-5 px-7 fixed top-0 right-0 w-full z-50   ${
          sticky ? "!bg-black shadow-xl" : ""
        }`}
      >
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {/* only dekstop view nav links */}
        <div className="navList-nav md1200:hidden">
          <NavList links={links} />
        </div>

        {/* sidebar  */}
        <div
          className={`flex flex-col w-[26%] absolute h-[100vh] py-12 gap-10 px-9 bg-white top-0 left-0 overflow-y-scroll ease-in-out duration-150 overflow-x-hidden ${
            !sidebar ? "translate-x-[-100%] " : "translate-x-0"
          }`}
        >
          <div className="flex flex-row items-center justify-between">
            <img src={logo2} className="w-[8.5rem]" alt="" />
            <i
              onClick={() => setSidebar(false)}
              className="fa-solid fa-xmark text-[#ff0336] text-[2.3rem] cursor-pointer"
            ></i>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-black text-[20px] font-bold capitalize ml-2 mr-4 tracking-wider">
              About us
            </h3>
            <p className="break-words text-[16px] text-start text-[#000000B1]">
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-black text-[20px] font-bold capitalize ml-2 mr-4 tracking-wider">
              gallery
            </h3>
            <div className="grid grid-cols-3 grid-row-2 gap-2.5">
              <img src={side2} alt="" className="rounded-xl cursor-pointer" />
              <img src={side1} alt="" className="rounded-xl cursor-pointer" />
              <img src={side3} alt="" className="rounded-xl cursor-pointer" />
              <img src={side4} alt="" className="rounded-xl cursor-pointer" />
              <img src={side6} alt="" className="rounded-xl cursor-pointer" />
              <img src={side5} alt="" className="rounded-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-black text-[20px] font-bold capitalize ml-2 mr-4 tracking-wider">
              contact info
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-start items-center gap-5">
                <i className="fa-solid fa-location-dot text-[#ff0336] "></i>
                <p className="break-words text-[16px] capitalize text-start text-[#000000B1] cursor-pointer hover:font-bold ease-in  duration-100">
                  69 street, vasundhara city
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <i className="fa-solid fa-phone text-[#ff0336] "></i>
                <p className="break-words text-[16px] text-start text-[#000000B1] cursor-pointer hover:font-bold ease-in  duration-100">
                  +91 999989898
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <i className="fa-solid fa-envelope text-[#ff0336] "></i>
                <p className="break-words text-[16px] capitalize text-start text-[#000000B1] cursor-pointer hover:font-bold ease-in  duration-100">
                  gymate@gymail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-black text-[20px] font-bold capitalize ml-2 mr-4 tracking-wider">
              Follow us
            </h3>
            <div className="flex gap-5">
              <i className="fa-brands fa-twitter bg-[#ff0336] text-2xl py-2 px-3 text-white rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-facebook bg-[#ff0336] text-2xl py-2 px-3 text-white rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-instagram bg-[#ff0336] text-2xl py-2 px-3 text-white rounded-full cursor-pointer"></i>
            </div>
          </div>
        </div>
        {/* sidebar ends here */}

        {/* nav items  */}
        <div className="flex gap-7 items-center">
          {/* hamburger signup toggle-button */}
          <div className="flex gap-7">
            {/* hamburger */}
            <i
              onClick={() => setHamburger(!hamburger)}
              className="fa-bars fa-solid hidden text-white text-2xl cursor-pointer
            hover:text-[#FF0336] ease-in duration-200 md1200:block"
            ></i>
            {/* signup */}
            <Link>
              <i className="fa-regular fa-user  text-white text-2xl cursor-pointer hover:text-[#FF0336] ease-in-out duration-200"></i>
            </Link>
            {/* sidebar Toggle */}
            <i
              onClick={() => setSidebar(!sidebar)}
              className="fa-regular fa-chart-bar text-white text-2xl cursor-pointer hover:text-[#FF0336] ease-in-out duration-200"
            ></i>
          </div>
          {/* join-btn */}
          <div className="border-solid border-[rgba(255,255,255,0.3)] border-2 pr-3 p-1.5 rounded-md min620:hidden">
            <Link className="flex items-center">
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-1.5xl py-2.5 px-3 rounded-md nav-btn-hover`}
              ></i>
              <h3 className="text-white text-[13px] font-bold uppercase ml-2 mr-4 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>

        {/* mobile nav links */}
        <div
          className={`hidden flex-col gap-5 bg-white absolute  items-center z-51 left-0 top-0 w-[100vw] h-[100vh]  ${
            hamburger ? "translate-x-[-100%]" : "translate-x-0"
          } md1200:flex ease-in-out duration-300 `}
        >
          <div className="flex justify-between mt-16 w-[70vw] ">
            <img src={logo2} className="w-[8.5rem]" alt="" />

            <i
              onClick={() => setHamburger(true)}
              className="fa-solid fa-xmark text-[#ff0336] text-[2.3rem] cursor-pointer"
            ></i>
          </div>
          <ul className="flex flex-col gap-5">
            {links.map((item, index) => (
              <li
                key={index}
                style={{ transition: "all 0.2s" }}
                className="cursor-pointer text-center font-semibold capitalize hover:text-[#ff0336]"
              >
                <Link className="text-[20px]" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
