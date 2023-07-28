import main from "../../images/choose-us/main-img.png";
import img1 from "../../images/choose-us/bottle-of-water.png";
import img2 from "../../images/choose-us/bench-press.png";
import img3 from "../../images/choose-us/gym-bag.png";
import img4 from "../../images/choose-us/training.png";

function ChooseUs() {
  const grid = [
    { img: img1, title: "fresh bottle water" },
    { img: img2, title: "modern gym equipments" },
    { img: img3, title: "gym bag equipments" },
    { img: img4, title: "free fitness training" },
  ];

  return (
    <>
      <section id="chooseUs" className="flex w-full pt-3 pb-10 ">
        <div className="container flex gap-12 max-w-[90%] h-full m-auto md1200:min-w-full md1200:flex-col ">
          <div className="flex items-end gap-5 pb-8 min-w-[50%]">
            <div className="h-[40%] min-w-[5px] bg-[#ff0336]"></div>
            <img className="object-contain h-[85%]" src={main} alt="" />
            <div className="h-[60%] min-w-[9px] -rotate-[7deg] mb-[7rem] bg-[#ff0336]"></div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-white title-bg uppercase px-7 py-2 font-semibold text-[17px]  min540:text-[15px]">
              why choose us
            </p>
            <h1 className="font-bold uppercase text-white text-start  text-[34px] min800:text-[15px] md1200:text-2xl ">
              We Can Give A Shape Of Your Body Here!
            </h1>
            <p className="text-[#b4b4b4]   max-w-[70%]">
              At <span className="font-bold text-[#eee]">Gymate</span>, we are
              dedicated to helping you achieve the body of your dreams. Our
              expert trainers and nutritionists will work with you to create a
              personalized fitness and nutrition plan that helps you reach your
              specific goals.
            </p>
            <div className="grid grid-rows-2 grid-cols-2 gap-2 mt-3 min800:grid-cols-1">
              {grid.map((item, index) => (
                <div key={index} className="flex gap-2 items-center py-1">
                  <img
                    src={item.img}
                    className="w-[4rem] p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[#ff0336]"
                    alt=""
                  />
                  <p className="text-[#eee] uppercase font-bold max-w-[60%]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="glow-on-hover flex justify-around mt-7 text-[#b4b4b4] items-center font-semibold uppercase hover:text-[#ff0336] hover:justify-center ease-in-out duration-300"
              type="button"
            >
              <p>our classes &nbsp;</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
