import './App.css';
import { Routes, Route } from "react-router-dom";
import MoviesList from './pages/Movieslist';
import LikedMovies from './pages/LikedMovies'

function App() {
  return (
    <div className="flex justify-center gap-4 flex-col mt-20">
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/liked" element={<LikedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
