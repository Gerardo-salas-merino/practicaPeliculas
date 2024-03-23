

const paginationMovies = (movies, currentPage ) => {
    //cuantas peliculas quiero ver por pagina
    const MOVIES_PER_PAGES = 4;

    //Las movies que se van a renderizar en la pagina actual

    const sliceEnd = currentPage * MOVIES_PER_PAGES;
    const sliceStar = sliceEnd - MOVIES_PER_PAGES;
    movies.slice(sliceStar, sliceEnd);

    //en esta parte ya tenemos las peliculas que se van a renderizar en la primera pagina
    const moviesInCurrenPage = movies.slice(sliceStar, sliceEnd);

    //ultima pagina o la cantidad de paginas
    const lasPage = movies.length / MOVIES_PER_PAGES

    //Bloque actual, cuantas paginas quiero por bloque
    const PAGES_PER_BLOCK = 2;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    //Las paginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = [];
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;

    for(let i = minPage; i<= maxPage; i++){
        if(i <= lasPage){
            pagesInCurrentBlock.push(i)
        }
        
    }

    return{
        moviesInCurrenPage,
        lasPage,
        pagesInCurrentBlock
    }


}

export { paginationMovies };