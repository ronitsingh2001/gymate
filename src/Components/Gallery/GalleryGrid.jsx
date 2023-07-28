import i1 from "../../images/gallery/img1.jpg";
import i2 from "../../images/gallery/img2.jpg";
import i3 from "../../images/gallery/img3.jpg";
import i4 from "../../images/gallery/img4.jpg";
import i5 from "../../images/gallery/img5.jpg";
// import i6 from "../../images/gallery/img6.jpg";

function GalleryGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 grid-rows-3 grid-flow-col  max-w-[80%] h-screen">
      <div className="row-span-2 col-span-2">
        <img className="object-cover" src={i1} alt="" />
      </div>
      <div className="row-span-2 ">
        <img src={i2} alt="" />
      </div>
      <div className=" col-span-1">
        <img src={i3} alt="" />
      </div>
      <div className=" col-span-1">
        <img src={i4} alt="" />
      </div>
      <div className="row-span-2 col-span-2">
        <img src={i5} alt="" />
      </div>
    </div>
  );
}

export default GalleryGrid;
