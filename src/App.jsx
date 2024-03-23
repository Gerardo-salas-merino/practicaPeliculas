import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoutes from "./pages/PrivateRoutes";
import Page404 from "./pages/Page404";



const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  

  return (
    <main>
      {/* Mis rutas */}

      <Routes>     
        
        {/*RUTAS PROTEGIDAS  */}
        <Route element={<PrivateRoutes isLogged={isLogged} />}>
          <Route path="/" element={<Home /> } />
          {/*Ruta para renderizar una movie por su Id  */}
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>

        
        {/* RUTAS PUBLICAS */}
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="*" element={<Page404 />} />

        
      </Routes>
    </main>
  );
}

export default App;
