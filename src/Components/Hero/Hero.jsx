import TitleBg from "../../images/pricing/titlebg.svg";

function Hero() {
  return (
    <>
      <section id="hero" className="hero-section w-full h-screen ">
        <div className="container-hero">
          <div className="flex flex-col h-screen justify-center items-end w-[85%]  text-white min620:w-full min620:items-center">
            <div className="flex relative flex-col justify-center gap-5  items-start text-white">
              <img
                className="absolute top-0 title-white w-[15rem] min540:w-[12rem]"
                src={TitleBg}
                alt=""
              />
              <p className="text-black capitalize px-6 p-2 font-semibold text-[20px] z-10 min540:text-[15px]">
                find your energy
              </p>
              <h1 className="font-bold uppercase text-white z-10 text-5xl min540:text-3xl">
                Make Your Body
              </h1>
              <h1 className="uppercase text-white z-10 text-5xl min540:text-3xl">
                Fit & perfect
              </h1>
              <button
                className="glow-on-hover font-semibold uppercase hover:text-[#ff0336] ease-in-out duration-300"
                type="button"
              >
                Our classes!
              </button>
              <div className="absolute flex flex-row-reverse -right-64 top-36 -rotate-90 items-center md1000:-right-44 min620:hidden">
                <p className=" text-white uppercase tracking-widest text-[20px] font-bold">
                  share
                </p>
                <span className="mr-6 h-[2.5px] bg-[#ff0336] w-[35px]"></span>
                <div className="flex gap-5 mr-5">
                  <i className="fa-brands fa-twitter text-2xl rotate-90 p-1 text-white rounded-full cursor-pointer hover:text-[#ff0336] ease-in-out duration-300"></i>
                  <i className="fa-brands fa-facebook text-2xl rotate-90 p-1 text-white rounded-full cursor-pointer hover:text-[#ff0336] ease-in-out duration-300"></i>
                  <i className="fa-brands fa-instagram text-2xl rotate-90 p-1 text-white rounded-full cursor-pointer hover:text-[#ff0336] ease-in-out duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
