import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeMovie, unlikeMovie } from '../redux/likedMoviesSlice';
import { MdOutlineStarPurple500 } from "react-icons/md";

const MovieCard = ({ moviedata }) => {
  const dispatch = useDispatch();
  const likedMovies = useSelector((state) => state.likedMovies.likedMovies);

  const isLiked = likedMovies.some(movie => movie.id === moviedata.id);

  const handleLike = () => {
    if (isLiked) {
      dispatch(unlikeMovie(moviedata));
    } else {
      dispatch(likeMovie(moviedata));
    }
  };

  return (
    <div className="max-w-sm mx-auto hover:shadow-lg duration-200 transition-all bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src="https://cdn.dribbble.com/users/4018209/screenshots/8247915/media/7479a9a55ad372725a45051e25080438.jpg?resize=400x300&vertical=center"
        alt={`${moviedata.movie} poster`}
      />
      <div className="w-full flex flex-col items-start justify-between p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Name: {moviedata.movie}
        </h5>

        <div className="flex flex-row items-center justify-start w-full mb-3">
          <p className="text-center font-normal text-gray-700 dark:text-gray-400">
            Rating: {moviedata.rating}
          </p>
          <MdOutlineStarPurple500 className="ml-2 size-6 text-yellow-500" />
        </div>

        <div className="flex flex-row gap-x-4 mt-4 w-full">
          <a
            href={moviedata.imdb_url || "#"}
            target={moviedata.imdb_url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50 hover:brightness-110 hover:animate-pulse"
          >
            Watch movie
          </a>

          <button
            onClick={handleLike}
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white rounded-full focus:ring-4 focus:outline-none ${
              isLiked
                ? "bg-green-600 hover:bg-green-700 focus:ring-green-800"
                : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
            }`}
          >
            {isLiked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
