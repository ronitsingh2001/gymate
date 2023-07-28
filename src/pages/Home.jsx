import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Features from "../Components/Features/Features";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import Trainers from "../Components/Trainers/Trainers";
import Testimonials from "../Components/Testimonials/Testimonials";
import Gallery from "../Components/Gallery/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
    </>
  );
}

export default Home;
