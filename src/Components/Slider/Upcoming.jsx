import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

import { genres } from "../genres";

export default function UpcomingSlider() {
  const [tvShows, setTvShows] = useState([]);

  async function fetchUpcoming() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWNhNDNmZDQwYmIyMTc0YjBlYmY3ODI1MzBkNjZhYyIsIm5iZiI6MTcyNTM4ODg1OC40NjY1NjYsInN1YiI6IjY2YWM0ZGU1YzQ0ZDZjMjAzZDYzMWE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PUiqDxRUk7aB9BTN_tsnkJj3c-4TbZHJ59UaYIGgRHk",
          },
        }
      );
      setTvShows(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1500,
  };

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      })
      .join(", ");
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="my-16 mx-auto container">
      <div className="relative">
        <h6 className="text-3xl after:bg-blue-500 ml-3 p-3 Head">
          Upcoming Now
        </h6>
      </div>
      <Slider {...settings}>
        {tvShows.map((show) => (
          <div>
            <div key={show.id} className="p-3">
              <div className="flex flex-col rounded  lg:flex-row bg-gray-900 p-3  shadow-lg">
                <div className="lg:w-1/2 ">
                  <img
                    src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                    alt={show.title}
                    className="w-full rounded-t  lg-rounded-l-md"
                  />
                </div>
                <div className="lg:w-1/2  flex bg-gray-800 rounded-b lg:rounded-r-md overflow-hidden">
                  <div className="p-5 flex flex-col gap-3 justify-between text-gray-200">
                    <h3 className="text-4xl font-bold">{show.title}</h3>
                    <div>
                      <p className="text-sm">
                        Release Date: {show.release_date}
                      </p>
                      <p className="text-lg">{show.overview}</p>
                    </div>
                    <p className="text-sm">
                      Genres: {getGenreNames(show.genre_ids)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
