
import { useContext } from "react";
import { RecipeContext } from "../context/AuthContext";
import  "../css/RecipeCard.css"


import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);
  // console.log(recipes);
const navigate=useNavigate()
  return (

    <div className="recipeCardContainer">
      {recipes.map(({ recipe },index) => (
        <div  className="cards" key={index}>
          <p>{recipe.label}</p>
          <img src={recipe.image} />

          <button onClick={()=>navigate("/details", {state:{recipe}})}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
