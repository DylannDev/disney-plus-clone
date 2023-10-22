import React from "react";
import Image from "next/image";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

function HorizontalMovieCard({ movie }) {
  return (
    <div className="pb-3 rounded-xl hover:border-2 border-slate-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
      <Image
        src={IMAGE_BASE_URL + movie.backdrop_path}
        width={300}
        height={100}
        alt="Movies poster"
        className="w-[110px] md:w-[350px] rounded-xl"
      />
      <h2 className="movie-title text-sm shadow-lg font-semibold -mt-12 pl-4 text-white w-[110px] md:w-[350px]">
        {movie.title}
      </h2>
    </div>
  );
}

export default HorizontalMovieCard;
