import { useContext } from "react"
import { RecipeContext } from "../context/AuthContext"
import { Outlet,Navigate  } from "react-router-dom"



const PrivateRouter = () => {
  const{email,password}=useContext(RecipeContext)

  return ( email==="ayca@gmail.com" && password==="1234" ? <Outlet/>   :  <Navigate to="/Recipe"/>


  )
}

export default PrivateRouter