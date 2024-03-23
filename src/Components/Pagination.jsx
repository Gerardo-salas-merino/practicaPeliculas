import { IconChevronRight, IconChevronsRight, IconChevronLeft, IconChevronsLeft } from '@tabler/icons-react'

const Pagination = ({ lasPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {
    
    const handleLastPage = () => {
        setCurrentPage(lasPage);
    }

    const handleFirstPage = () => {
        setCurrentPage(1)
    }

    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        if(nextPage <= lasPage){
            setCurrentPage(nextPage);
        }
    }

    const handlebackPage = () => {
        const previousPage = currentPage - 1;
        if(previousPage > 0){
            setCurrentPage(previousPage);
        }
       
    }

  return (
    <ul className='pb-2 text-lg flex gap-2 justify-center font-bold xl:translate-x-[165%] md:translate-x-[50%]'>
        <li className='flex gap-2'>
            <button
                onClick={handleFirstPage }
                className='p-2 w-[40px] h-[43.5px] rounded-md hover:bg-green-500 hover:text-white transition-colors bg-green-200 text-black'
            >
                <IconChevronsLeft />
            </button>
            <button
                onClick={handlebackPage}
                className='p-2 w-[40px] h-[43.5px] rounded-md hover:bg-green-500 hover:text-white transition-colors bg-green-200 text-black'
            >
                <IconChevronLeft/>
            </button>
        </li>
        
        {
            
            pagesInCurrentBlock.map((page) => (
                <li key={page}>
                    <button 
                        onClick={() => setCurrentPage(page)}
                        className={`p-2  rounded-md hover:bg-green-500 hover:text-white transition-colors 
                        ${
                            page === currentPage ? "bg-green-500 text-white" : "bg-green-300"
                        }`}
                    >
                        {page}
                    </button>
                </li>
            ))

        }
        <li className='flex gap-2'>
            <button
                onClick={handleNextPage}
                className='p-2 w-[40px] h-[43.5px] rounded-md hover:bg-green-500 hover:text-white transition-colors bg-green-200 text-black'
            >
                <IconChevronRight />
            </button>
            <button
                onClick={handleLastPage}
                className='p-2 w-[40px] h-[43.5px] rounded-md hover:bg-green-500 hover:text-white transition-colors bg-green-200 text-black'
            >
                <IconChevronsRight/>
            </button>
        </li>
    </ul>
  )
}

export default Pagination