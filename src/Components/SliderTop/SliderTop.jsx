import React from 'react'
import Slider from 'react-slick'
import { Star, Play, Info } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GOT from '../../assets/GOT.jpg'
import BB from '../../assets/BB.jpg'
import ST from '../../assets/ST.jpg'
import TM from '../../assets/TM.jpg'
import TC from '../../assets/TheCrown.jpg'

const tvShows = [
  {
    id: 1,
    title: "Game of Thrones",
    description: "Seven noble families fight for control of the mythical land of Westeros. Political and sexual intrigue abound. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    image: GOT,
    rating: 9.2,
    seasons: 8,
    episodes: 73,
    years: "2011-2019",
    genres: ["Drama", "Fantasy", "Adventure"],
  },
  {
    id: 2,
    title: "Stranger Things",
    description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back. Set in the 1980s, this series is a thrilling blend of sci-fi horror and nostalgic adventure.",
    image: ST,
    rating: 8.7,
    seasons: 4,
    episodes: 34,
    years: "2016-present",
    genres: ["Drama", "Fantasy", "Horror"],
  },
  {
    id: 3,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. This critically acclaimed series explores the depths one man will go to provide for his family.",
    image: BB,
    rating: 9.5,
    seasons: 5,
    episodes: 62,
    years: "2008-2013",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 4,
    title: "The Crown",
    description: "This historical drama chronicles the life of Queen Elizabeth II from the 1940s to modern times. The series begins with an inside look at the early reign of the queen, who ascended the throne at age 25 after the death of her father, King George VI.",
    image: TC,
    rating: 8.7,
    seasons: 5,
    episodes: 50,
    years: "2016-present",
    genres: ["Biography", "Drama", "History"],
  },
  {
    id: 5,
    title: "The Mandalorian",
    description: "After the fall of the Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy. Set in the Star Wars universe, this space Western follows the adventures of a mysterious bounty hunter as he navigates a dangerous galaxy.",
    image: TM,
    rating: 8.7,
    seasons: 3,
    episodes: 24,
    years: "2019-present",
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
]

export default function SliderTop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {tvShows.map((show) => (
          <div key={show.id} className="relative w-full h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${show.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
              <div className="flex flex-col justify-center h-full max-w-2xl px-8 md:px-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{show.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white text-lg font-medium">{show.rating}</span>
                  </div>
                  <span className="text-white">{show.seasons} Seasons</span>
                  <span className="text-white">{show.episodes} Episodes</span>
                  <span className="text-white">{show.years}</span>
                </div>
                <div className="mb-4">
                  {show.genres.map((genre, index) => (
                    <span key={index} className="inline-block bg-white/20 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-white text-sm md:text-base mb-6 line-clamp-4 md:line-clamp-none">
                  {show.description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-black px-4 py-2 rounded-md flex items-center">
                    <Play className="mr-2 h-4 w-4" /> Watch Trailer
                  </button>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-md flex items-center">
                    <Info className="mr-2 h-4 w-4" /> More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}