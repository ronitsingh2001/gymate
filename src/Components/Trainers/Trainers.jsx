import TitleBg from "../../images/pricing/titlebg.svg";
import trainer1 from "../../images/trainers/trainer1.png";
import trainer2 from "../../images/trainers/trainer2.png";
import trainer3 from "../../images/trainers/trainer3.png";

function Trainers() {
  const trainers = [
    { name: "john wick", img: trainer1, job: "yoga trainer" },
    { name: "loggy foote", img: trainer2, job: "crossfit trainer" },
    { name: "lean beef patty", img: trainer3, job: "personal trainer" },
  ];
  return (
    <section
      id="trainer"
      className="flex flex-col  justify-center items-center text-center pt-20 pb-10 bg-black"
    >
      <div className="flex gap-10 max-w-[90%] p-4">
        <img src={TitleBg} alt="" className="w-fit absolute " />
        <p className="text-white uppercase pl-9 pt-1 font-semibold text-[17px] z-10 min540:text-[15px]">
          gym trainers
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="font-bold capitalize  z-10 text-[35px] min540:text-1xl">
          Team of expert coaches
        </h1>
        <p className="text-[#646464] max-w-[50%]">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-16 md1000:grid-cols-1 max-w-[80%]">
        {trainers.map((item, i) => (
          <div
            id="trainerBg"
            className="flex flex-col gap-10 justify-center items-center p-5 relative "
          >
            <img
              className="grayscale-[10] p-10 hover:grayscale-0 cursor-pointer"
              src={item.img}
              alt=""
            />
            <div className="absolute flex flex-col gap-2 items-center bottom-[10%] shadow-lg rounded-xl bg-white w-full p-4">
              <h1 className="font-bold capitalize  z-10 text-[35px] min540:text-1xl">
                {item.name}
              </h1>
              <p className="text-[#646464] text-center">{item.job}</p>
              <div className="flex gap-2 items-center">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;
