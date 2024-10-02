
import { useContext } from "react";
import { RecipeContext } from "../context/AuthContext";


import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);
  // console.log(recipes);
const navigate=useNavigate()
  return (

    <div>
      {recipes.map(({ recipe },index) => (
        <div key={index}>
          <p>{recipe.label}</p>
          <img src={recipe.image} />

          <button onClick={()=>navigate("/details", {state:{recipe}})}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
