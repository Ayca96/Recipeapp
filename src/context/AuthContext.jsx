import axios from "axios";
import { useState } from "react";
import { createContext } from "react"
import BounceLoader from "react-spinners/BounceLoader";



export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const AuthContext = ({children}) => {

  const [firstName, setfirstName] = useState(localStorage.getItem("username") || "");
  const [lastName, setLastName] = useState(localStorage.getItem("userlastname") || "");
  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);

      setRecipes(data.hits);

    } catch (error) {
      setError(true);
    }finally{
      setLoading(false);

    }
  };

if(error){
  return <p> Something Went Wrong....</p>
}

if(loading){
  return  (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <BounceLoader color="#36d7b7" loading={loading} size={60} />
      </div>
  );
}




  return (
    <RecipeContext.Provider value={{firstName, setfirstName, lastName,setLastName, email,setEmail,password,setPassword, getData,recipes,setQuery,setMealType}}>
    
   {children}
    
    </RecipeContext.Provider>
  )
}

export default AuthContext