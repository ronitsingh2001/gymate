import React from "react";
import GalleryGrid from "./GalleryGrid";

function Gallery() {
  return (
    <section
      id="gallery"
      className="flex flex-col gap-6 justify-center items-center text-center pt-20 pb-10 "
    >
      <div className="flex gap-10 max-w-[90%] p-4">
        <p className="text-white uppercase title-bg px-10  font-semibold text-[19px] z-10 min540:text-[15px]">
          gymate gallery
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="font-bold capitalize  z-10 text-[35px] min540:text-1xl">
          Our Workplace Gallery
        </h1>
        <p className="text-[#646464] max-w-[60%]">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases company's work atmosphere.
        </p>
      </div>
      <GalleryGrid />
    </section>
  );
}

export default Gallery;
