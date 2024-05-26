import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { getAllMovies } from "../api/allMovies";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getAllMovies();
        const sortedMovies = res.sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
        setLoading(false);
        toast.success("Movies fetched successfully!!");
      } catch (error) {
        toast.error("Failed to fetch movies");
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Movies List</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviedata={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
