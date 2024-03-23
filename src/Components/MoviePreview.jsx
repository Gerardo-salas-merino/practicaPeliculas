import { Link } from 'react-router-dom';



const MoviePreview = ({ movie }) => {
  return (
    <Link 
        to={`/movie/${movie.id}`}
        className="rounded-md first-line:hover:shadow-lg grid gap-2 transition-all"    
        key={movie.id}
    >
        <div className="">
            <img 
                className="w-[100%] h-[100%] rounded-xl"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="img" 
            />
        </div> 

        <div className="grid gap-2 uppercase">
            <span 
                className="flex justify-center font-montserrat text-sm text-center"
                    
            >
                {movie.title}
            </span>
                   
                    
        </div>  


    </Link>    
  )
}

export default MoviePreview