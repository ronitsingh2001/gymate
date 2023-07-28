import React from "react";
import { classes } from "./classes";

function Feature() {
  return (
    <>
      <div className="grid  gap-4 grid-cols-4 grid-rows-1 mb-10 md1000:flex md1000:flex-col w-[-webkit-fill-available]">
        {classes.map((item, index) => (
          <div key={index} className={`h-[19rem]  group row-span-2 col-span-${item.grid} c`}>
            {/* Feactures image */}
            <div className="w-full h-full relative  overflow-hidden cursor-pointer  ">
              <img
                src={item.img}
                alt=""
                className=" h-[100%] object-cover  w-full group-hover:scale-125 grayscale-[10] hover:grayscale-0 ease-in-out duration-500 "
              />
              {/* Features logo */}
              <div className="absolute z-10 top-[25%] hover:bg-[#ff0336] -left-16 flex  w-[10rem] rounded-full bg-[hsla(0,0%,100%,.3);] justify-end px-5 p-3 rotate-[40deg]">
                <img
                  className="w-[2.2rem] -rotate-[40deg]"
                  src={item.logo}
                  alt=""
                />
              </div>
              {/* Features text */}
              <div className="absolute z-10 top-[60%] left-4 opacity-100">
                <h1 className="uppercase font-bold text-3xl text-white mb-3 text-start">
                  {item.name}
                </h1>
                <p className="p-1 bg-[#ff0336] capitalize rounded-lg text-white">
                  {item.day}:{item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feature;
