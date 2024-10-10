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
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("[MovieBar] user effect - mount/update");
  }, []);

  console.log("[MovieBar] render");

  const addOneCard = () => {
    if (inputValue.trim() === "") return;
    setMovies((prevState) => [
      ...prevState,
      { id: String(new Date()), title: inputValue },
    ]);
    setInputValue("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleCardChange = (id: string, newValue: string) => {
    setMovies((prevState) =>
      prevState.map((movie) =>
        movie.id === id ? { ...movie, title: newValue } : movie
      )
    );
  };

  const deleteCard = (id: string) => {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container">
      <div className="Movies">
        <MovieInput
          title="Enter movie title"
          onClick={addOneCard}
          value={inputValue}
          onChange={handleInputChange}
        />
        <h4>To watch list: </h4>
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            onDelete={deleteCard}
            value={movie.title}
            onChange={handleCardChange}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieBar;
