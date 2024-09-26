import { useState } from "react";
import { createContext } from "react"



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



  return (
    <RecipeContext.Provider value={{firstName, setfirstName, lastName,setLastName, email,setEmail,password,setPassword}}>
    
   {children}
    
    </RecipeContext.Provider>
  )
}

export default AuthContext