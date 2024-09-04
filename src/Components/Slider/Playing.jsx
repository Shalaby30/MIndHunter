import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PlayingSlider() {
  const [tvShows, setTvShows] = useState([]);



  async function fetchPlaying() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWNhNDNmZDQwYmIyMTc0YjBlYmY3ODI1MzBkNjZhYyIsIm5iZiI6MTcyNTM4ODg1OC40NjY1NjYsInN1YiI6IjY2YWM0ZGU1YzQ0ZDZjMjAzZDYzMWE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PUiqDxRUk7aB9BTN_tsnkJj3c-4TbZHJ59UaYIGgRHk",
          },
        }
      );
      setTvShows(data.results);
      
    } catch (error) {
      console.log(error);
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
  };

  useEffect(() => {
    fetchPlaying();
  }, []);

  return (
    <div className="my-16 mx-auto container">
      <div className="relative">
        <h6 className="text-3xl after:bg-blue-500 ml-3  p-3 Head">
          Playing Now
        </h6>
      </div>
      <Slider {...settings}>
        {tvShows.map((show) => (
          <div key={show.id} className="w-1/6 relative p-3 ">
            <img
              className=" w-full"
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.title}
            />
            <div className="Layer">
              <div className=" w-full h-full flex flex-col justify-between">
                <div className="ml-auto mr-3 mt-3 flex flex-col gap-2">
                  <button className="text-xl">
                    <i className="fas fa-heart hover:text-red-600 hover:border-red-600 transition border p-1.5 rounded-full "></i>
                  </button>
                  <button className="text-xl">
                    <i className="fas fa-bookmark hover:text-yellow-400 hover:border-yellow-400 transition border p-1.5 px-2 rounded-full "></i>
                  </button>
                </div>
                <div className="mx-4 mb-3 flex justify-between ">
                  <h2 className=" text-l  ">{show.title}</h2>
                  <p className="">
                    <i className="fas fa-star"></i>{" "}
                    {show.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
