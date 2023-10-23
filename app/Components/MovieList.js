/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { getMovieByGenreId } from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { nanoid } from "nanoid";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import HorizontalMovieCard from "./HorizontalMovieCard";

function MovieList({ genreId, indexValue }) {
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(null);
  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenre();
    const getScreenWidth = window.innerWidth;
    setScreenWidth(getScreenWidth);
  }, []);

  const getMovieByGenre = () => {
    getMovieByGenreId(genreId).then((response) => {
      setMovieList(response.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 128;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 128;
  };

  return (
    <div className="relative">
      <FaChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block text-white text-2xl absolute left-0 top-[50%] translate-y-[-50%] z-10 cursor-pointer"
      />
      <FaChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="hidden md:block text-white text-2xl absolute right-0 top-[50%] translate-y-[-50%] z-10 cursor-pointer"
      />
      <div
        className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-2 md:px-6 md:pb-10"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard key={nanoid(8)} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
