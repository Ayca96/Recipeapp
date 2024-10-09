import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
// import Kontakt from "../pages/Kontakt";
import NavBar from "../components/navbar/NavBar";
import Login from "../pages/Login";
// import Recipe from "../pages/Recipe";
import PrivateRouter from "../router/PrivateRouter"
import Details from "../pages/details/Details";
import Recipes from "../pages/Recipes";

import CurrentDate from "../components/CurrentDate";


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>  
      <NavBar/>
     
        <Routes>
        <Route path="/home" element={<PrivateRouter/>}>
          <Route path="" element={<Recipes/>} />
        </Route>


          <Route path="/about"  element={<About/>}/>
          {/* <Route path="/register"  element={<Register/>}/> */}
          <Route path="/"  element={<Home/>}/>


          <Route path="/recipe" element={<PrivateRouter/>}>
          <Route path="" element={<Recipes/>} />
        </Route>

          <Route path="/login" element={<Login/>} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
