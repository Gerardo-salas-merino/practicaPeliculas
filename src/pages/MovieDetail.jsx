import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";


const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    
    
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7e22a1d5f3a6fffa09ca9df0e522b7fb&language=es-MX`)
    .then(({data}) => setMovieInfo(data))
    .catch((err) => console.log(err))
  
    
  }, [id])
  
  return (
    <section className="bg-[#080F28] h-screen overflow-y-auto">
      <Header />

      <div className={`text-center w-[90%] mx-auto shadow-custom mt-20 lg:flex md:flex  text-white gap-4`}>
        
        <div className="h-96 w-[100%] lg:w-[36rem] " >
          <img className="h-[100%] w-[100%] rounded-lg"  src={`https://image.tmdb.org/t/p/w200/${movieInfo?.poster_path}`}  alt="img" />
        </div>
        
        <div className="grid h-56 mt-10 font-montserrat text-left">
          
          <h1 className="font-bold">{movieInfo?.title}</h1>
          <span>Fecha de lanzamiento:  {movieInfo?.release_date}</span>
          
          <p className="text-amber-400">Descripción: {movieInfo?.overview}</p>
          
        </div>
        


          
       



      </div>

    </section>
  )
}

export default MovieDetail;