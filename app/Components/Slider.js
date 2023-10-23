"use client";
import React, { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../Services/GlobalApi";
import Image from "next/image";
import { nanoid } from "nanoid";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(null);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
    const getScreenWidth = window.innerWidth;
    setScreenWidth(getScreenWidth);
  }, []);

  const getTrendingMovies = () => {
    getTrendingVideos.then((response) => {
      setMovieList(response.data.results);
    });
  };

  console.log(screenWidth);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <FaChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block text-white text-2xl absolute left-8 top-[50%] translate-y-[-50%] cursor-pointer"
      />
      <FaChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="hidden md:block text-white text-2xl absolute right-8 top-[50%] translate-y-[-50%] cursor-pointer"
      />

      <div
        className="flex overflow-x-auto w-full scrollbar-hide scroll-smooth md:px-16 py-8 px-6"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <Image
            key={nanoid(8)}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="movie's image"
            width={1080}
            height={608}
            className="min-w-full md:h-[350px] mr-6 rounded-md shadow-xl shadow-slate-950 object-cover object-left-top hover:border-4 border-slate-200 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
