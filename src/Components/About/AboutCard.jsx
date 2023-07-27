import React from "react";
import ProgressionImg from "../../images/who-we-are/progresion.png";
import WorkoutImg from "../../images/who-we-are/workout.png";
import NutritionImg from "../../images/who-we-are/nutritions.png";

function AboutCard() {
  const cardList = [
    {
      img: ProgressionImg,
      title: "Progression",
      description:
        "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
      img: WorkoutImg,
      title: "Workout",
      description:
        " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
      img: NutritionImg,
      title: "Nutritions",
      description:
        "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    },
  ];

  return (
    <>
      {cardList.map((card, index) => (
        <div
          className="flex flex-col gap-4 bg-white text-[#000000B1] justify-center items-center p-5 py-8 tracking-wider rounded-tl-[20px] rounded-br-[20px] shadow-xl about-card about-card-div hover:text-white ease-in-out duration-300"
          key={index}
        >
          <img  src={card.img} alt="" />
          <h4 className=" px-14 uppercase font-semibold text-2xl">{card.title}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </>
  );
}

export default AboutCard;
