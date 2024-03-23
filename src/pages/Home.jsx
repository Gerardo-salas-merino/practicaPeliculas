import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../Components/MovieList";
import Header from '../Components/Header'



const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=7e22a1d5f3a6fffa09ca9df0e522b7fb&language=es-MX";

const Home = () => {

  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    
    // Obtener las películas más populares
    axios.get(BASE_URL)
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err));

     
  }, []);
  return (
    <main className="h-auto bg-[#080F28] ">
      <Header />

      <MovieList movies={movies} />

        
    </main>
  )
}

export default Home