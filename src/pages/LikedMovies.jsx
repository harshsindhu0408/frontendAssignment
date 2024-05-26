import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

const LikedMovies = () => {
  const likedMovies = useSelector((state) => state.likedMovies.likedMovies);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Liked Movies</h1>
      {likedMovies.length === 0 ? (
        <p className="text-center text-gray-700 dark:text-gray-400">No movies liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {likedMovies.map((movie) => (
            <MovieCard key={movie.id} moviedata={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedMovies
