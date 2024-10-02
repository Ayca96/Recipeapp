import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
// import Kontakt from "../pages/Kontakt";
import NavBar from "../components/navbar/NavBar";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";
import PrivateRouter from "../router/PrivateRouter"

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>  
      <NavBar/>
        <Routes>
        <Route path="/" element={<PrivateRouter/>}>
          <Route path="" element={<Home/>} />
        </Route>


          <Route path="/about"  element={<About/>}/>
          <Route path="/register"  element={<Register/>}/>
          <Route path="/login"  element={<Login/>}/>

          <Route path="/recipe"  element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
