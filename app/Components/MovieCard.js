"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
import { IoPlay, IoAddSharp, IoHelpSharp } from "react-icons/io5";

function MovieCard({ movie }) {
  const [hover, setHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const getScreenWidth = window.innerWidth;
    setScreenWidth(getScreenWidth);
  }, []);

  return screenWidth >= 768 && hover ? (
    <div className="fade-in-left">
      <Image
        src={IMAGE_BASE_URL + movie.backdrop_path}
        width={800}
        height={500}
        alt="Movies poster"
        onMouseOut={() => setHover(false)}
        className="w-[110px] md:h-[405px] md:min-w-[700px] rounded-xl shadow-xl shadow-slate-950"
      />
      <div className="-mt-32 ml-8 fade-in-bottom">
        <h2 className="mb-3 text-white font-medium text-xl text-shadow">
          {movie.title}
        </h2>
        <div className="flex items-center gap-3 w-[600px]">
          <button className="rounded-full bg-white p-4 h-fit hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <IoPlay className="text-2xl" />
          </button>
          <span className="mr-3 text-white font-medium text-sm text-shadow">
            Lecture
          </span>
          <button className="rounded-full bg-white p-3 h-fit opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <IoAddSharp className="text-2xl" />
          </button>
          <button className="rounded-full bg-white p-3 h-fit opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <IoHelpSharp className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Image
      src={IMAGE_BASE_URL + movie.poster_path}
      width={300}
      height={500}
      alt="Movies poster"
      onMouseOver={() => setHover(true)}
      className="w-[110px] md:w-[270px] rounded-xl cursor-pointer shadow-xl shadow-slate-950"
    />
  );
}

export default MovieCard;
