import React from "react";
import { classes } from "./classes";

function Feature() {
  return (
    <>
      <div className="grid  gap-4 grid-cols-4 mb-10 md1000:flex md1000:flex-col w-[-webkit-fill-available]">
        {classes.map((item, index) => (
          <div className={`h-[19rem]  group col-span-${item.grid}`}>
            {/* Feactures image */}
            <div className="w-full h-full relative  overflow-hidden cursor-pointer  ">
              <div className="bg-[rgba(0,0,0,.6)] absolute z-0 w-full h-full opacity-100 -z-1  hover:opacity-0 ease-in-out duration-500"></div>
              <img
                src={item.img}
                alt=""
                className=" h-[100%] object-cover  w-full group-hover:scale-125 ease-in-out duration-500 "
              />
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
