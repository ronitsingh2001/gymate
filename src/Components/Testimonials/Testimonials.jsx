import test1 from "../../images/testimonials/testimonial-new.jpg";
import coma from "../../images/testimonials/quotes.png";
import svg from "../../images/testimonials/testimonial-shape.svg";
import logo1 from "../../images/testimonials/logo1.png";
import logo2 from "../../images/testimonials/logo2.png";
import logo3 from "../../images/testimonials/logo3.png";
import logo4 from "../../images/testimonials/logo4.png";
import logo5 from "../../images/testimonials/logo5.png";

function Testimonials() {
  return (
    <section id="test" className="border-b-4 ">
      <div className="container flex flex-col items-center  gap-4 pb-10">
        <p className="text-white uppercase title-bg px-10 p-1 font-semibold text-[19px] z-10 min540:text-[15px]">
          testimonial
        </p>
        <div className="flex gap-0 p-7  w-full border-[10px] mt-60 relative">
          <img
            className="rounded-tr-[50%] w-[30%] absolute bottom-7"
            src={test1}
            alt=""
          />
          <div className="flex flex-col gap-2  bg-black w-full items-end p-10">
            <div className="flex flex-col gap-2 w-[55%]">
              <div className="w-[4rem]">
                <img className="w-full" src={coma} alt="" />
              </div>
              <p className="text-[#eee]">
                “I've been a member of Gymate for the past 6 months and it has
                been an amazing experience. The trainers are knowledgeable and
                supportive, the equipment is top-notch, and the community of
                members is friendly and encouraging.”
              </p>
              <p className="text-[#fff] capitalize font-bold">anglea white</p>
              <p className="text-[#eee] capitalize">local person</p>
              <img  src={svg} alt="" className="absolute right-40 bottom-7 invert-[0.2] w-[10rem]" />
              <div className="flex gap-4 self-end absolute bottom-16">
                <i title="left" className="fa-solid fa-arrow-left cursor-pointer hover:bg-[#ff0336] ease-in duration-100 p-4 bg-white"></i>
                <i title="right" className="fa-solid fa-arrow-right cursor-pointer hover:bg-[#ff0336] ease-in duration-100 p-4 bg-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-16 p-14">
            <img className="object-cover w-[10rem]" src={logo1} alt="" />
            <img className="object-cover w-[10rem]" src={logo2} alt="" />
            <img className="object-cover w-[10rem]" src={logo3} alt="" />
            <img className="object-cover w-[10rem]" src={logo4} alt="" />
            <img className="object-cover w-[10rem]" src={logo5} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
