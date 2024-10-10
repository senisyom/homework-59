import { useEffect, useState } from "react";
import { IMovie } from "../../types";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieInput from "../../components/MovieInput/MovieInput";

const MovieBar = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    { id: "1", title: "Movie1" },
    { id: "2", title: "Movie2" },
    { id: "3", title: "Movie3" },
  ]);

  useEffect(() => {
    console.log("[MovieBar] user effect - mount/update");
  }, []);

  console.log("[MovieBar] render");

  const addOneCard = () => {
    setMovies((prevState) => [
      ...prevState,
      { id: String(new Date()), title:  MovieInput.value },
    ]);
  };

  return (
    <div className="container">
      <div className="Movies">
              <MovieInput title="Enter movie title" onClick={addOneCard } />
              <h4>To watch list: </h4>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} />
        ))}
      </div>
      
    </div>
  );
};

export default MovieBar;
