import React from "react";
import { genresList } from "../data";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="mt-4">
      {genresList.map(
        (item, index) =>
          index <= 9 && (
            <div key={item.id} className="px-4 md:px-10">
              <h2 className="text-xl font-medium tracking-wide text-white pb-4 px-2 md:px-6">
                {item.name}
              </h2>
              <MovieList genreId={item.id} indexValue={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
