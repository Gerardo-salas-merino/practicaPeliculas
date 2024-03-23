import { useState } from "react";
import { paginationMovies } from "../utils/pagination";
import Pagination from "./Pagination";
import MoviePreview from "./MoviePreview";


const MovieList = ({ movies}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const { moviesInCurrenPage, lasPage, pagesInCurrentBlock} = paginationMovies(movies, currentPage)
   

  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center mx-auto max-w-[1200px] py-10 text-white">
        
        {moviesInCurrenPage.map((movie) => (

          <MoviePreview key={movie.id} movie={movie} />


        ))}
        <Pagination
            lasPage={lasPage} 
            pagesInCurrentBlock={pagesInCurrentBlock} 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
    </section>
  )
}

export default MovieList;