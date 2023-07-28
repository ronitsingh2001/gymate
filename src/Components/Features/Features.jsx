import React from "react";
import TitleBg from "../../images/pricing/titlebg.svg";
import bg from "../../images/features/cta-bg.png";
import Feature from "./Feature";

function Features() {
  return (
    <div id="features" className="flex gap-5 pt-20 ">
      <div className="flex flex-col gap-9 max-w-[85%] m-auto text-center items-center">
        <img src={TitleBg} alt="" className="w-[20rem] absolute " />
        <p className="text-white uppercase pl-9 pt-3 font-semibold text-[19px] z-10 min540:text-[15px]">
          our featured classes
        </p>
        <h1 className="font-bold uppercase  z-10 text-[39px] min540:text-1xl">
          We Are Offering Best Flexible Classes
        </h1>
        <Feature />
        <div className="flex items-center  w-screen relative pt-15 p-10 min620:flex-col min620:items-start   min-h-[18rem]">
          <img
            src={bg}
            alt=""
            className="absolute top-0 left-0 h-full w-full"
          />
          <h1 className="font-bold uppercase text-white text-start max-w-[60%]  z-10 text-[39px] min800:text-[15px] md1200:text-2xl ">
            We Are Always Providing Best Fitness Service For You
          </h1>
          <button
            className="glow-on-hover flex justify-around items-center font-semibold uppercase  hover:justify-center  ease-in-out duration-300"
            type="button"
          >
            <p className="text-1xl min800:text-[15px]">Join with us &nbsp;</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
