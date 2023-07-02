import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import style from "./MoviesGrid.module.css"

const Home = () => {

  const [topMovies, setTopMovies] = useState([]);
  
  const getTopRateMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setTopMovies(data.results);
  }

  useEffect(()=> {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

    
    getTopRateMovies(topRatedUrl);
  }, [])

  return (
    <div className={style.container}>
      <h2 className={style.title}>Best movies:</h2>
      <div className={style.movies_container}>
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 &&
        topMovies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
