import React from "react";
import TitleBg from "../../images/pricing/titlebg.svg";
import Feature from "./Feature";

function Features() {
  return (
    <div id="features" className="flex gap-5 pt-20 ">
      <div className="flex flex-col gap-9 max-w-[80%] m-auto text-center items-center">
        <img src={TitleBg} alt="" className="w-[20rem] absolute " />
        <p className="text-white uppercase pl-9 pt-3 font-semibold text-[19px] z-10 min540:text-[15px]">
          our featured classes
        </p>
        <h1 className="font-bold uppercase  z-10 text-[39px] min540:text-1xl">
          We Are Offering Best Flexible Classes
        </h1>
            <Feature />
      </div>
    </div>
  );
}

export default Features;
