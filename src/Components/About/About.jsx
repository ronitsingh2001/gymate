import React from "react";
import AboutCard from "./AboutCard";
import TitleBg from "../../images/pricing/titlebg.svg";
import weightlifter from "../../images/who-we-are/weightlifter.png";
import equipment from "../../images/who-we-are/equpments.png";
import gym from "../../images/who-we-are/gym.png";
import girlRedBg from "../../images/who-we-are/girl-redbg.svg";
import girl from "../../images/who-we-are/girl-run.png";
import girlText from "../../images/who-we-are/girl-side-text.png";
import girlWind from "../../images/who-we-are/wind.png";

function About() {
  return (
    <>
      <section className="about-section flex flex-col pb-[10rem]">
        <div className="container">
          <div className="about-cards flex gap-7 max-w-[90%] m-auto -mt-[3rem] md1200:flex-col ">
            <AboutCard />
          </div>
          <div id="about" className="flex gap-5 pt-20 ">
            <div className="flex flex-col gap-5 max-w-[90%] m-auto md1200:text-center md1200:items-center">
              <img src={TitleBg} alt="" className="w-[12rem] absolute py-2" />
              <p className="text-white capitalize pl-8 p-2 font-semibold text-[19px] z-10 min540:text-[15px]">
                who we are
              </p>
              <h1 className="font-bold uppercase  z-10 text-[33px] min540:text-1xl">
                Take Your Health And Body To Next Level
              </h1>
              <p className="text-[#646464] font-medium">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="flex gap-4 py-8">
                <div className="flex flex-col gap-6 items-center border-r-2 text-center">
                  <img className="w-[4rem]" src={weightlifter} alt="" />
                  <h3 className="uppercase font-semibold">
                    PROFESSIONAL TRAINERS
                  </h3>
                </div>
                <div className="flex flex-col gap-6 items-center border-r-2 text-center">
                  <img className="w-[4rem]" src={gym} alt="" />
                  <h3 className="uppercase font-semibold">
                    fancy gym machines
                  </h3>
                </div>
                <div className="flex flex-col gap-6 items-center  text-center">
                  <img className="w-[4rem]" src={equipment} alt="" />
                  <h3 className="uppercase font-semibold">modern equipment</h3>
                </div>
              </div>
              <button
                className="glow-on-hover flex justify-around items-center font-semibold uppercase hover:text-[#ff0336] hover:justify-center ease-in-out duration-300"
                type="button"
              >
                <p>Take tour &nbsp;</p>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="flex w-full justify-around relative md1200:hidden">
              <img src={girlText} alt="" />
              <img className="absolute z-10" src={girl} alt="" />
              <img
                className="absolute z-10 top-64 w-[5rem] right-44"
                src={girlWind}
                alt=""
              />
              <img src={girlRedBg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
