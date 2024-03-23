import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Header = () => {
  return (
    <header
      className="flex p-2 bg-[#141A32] shadow-md shadow-slate-200/40 "
    >
      <Link to="/" className="uppercase text-start p-2 font-semibold text-2xl text-white">Peliculas</Link>
        
    </header>
  )
}

export default Header;