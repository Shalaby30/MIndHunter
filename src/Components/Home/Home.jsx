import React from "react";
import SliderTop from "../SliderTop/SliderTop";
import Slider from "../Slider/Trending";
import PlayingSlider from "../Slider/Playing";
import Upcoming from "../Slider/Upcoming";

export default function Home() {
  return (
    <>
      <SliderTop />
      <Slider />
      <PlayingSlider />
      <Upcoming />
    </>
  );
}
