import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Kontakt from "../pages/Kontakt";
import NavBar from "../components/navbar/NavBar";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>  
      <NavBar/>
        <Routes>
          <Route path="/Home"  element={<Home/>}/>
          <Route path="/About"  element={<About/>}/>
          <Route path="/Register"  element={<Register/>}/>
          <Route path="/Login"  element={<Login/>}/>

          <Route path="/Recipe"  element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
