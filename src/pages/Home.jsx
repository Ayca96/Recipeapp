
import { useState } from "react";
import "../css/Home.css"
// import Recipe from "./Recipe";
import { useContext } from "react";
import { RecipeContext } from "../context/AuthContext";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";


function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  
  // const {recipes}=useContext(RecipeContext)
   const navigate = useNavigate()


  return (
  <>
  
    <div className="homeContainer">


  

   {/* {recipes.length > 0  && ( <RecipeCard />)} */}



    <div className="start">
       <p>Please sign up to access our delicious recipes.</p>
      <button 
      // onMouseOver={()=> setIsHovered(true)}
      onClick={()=> navigate("/register")}
      className="homeButon">Get Started</button>
    </div>
     
    </div>
  </>

    
  )
}

export default Home
