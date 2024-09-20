
import { useState } from "react";
import "../css/Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  const Navigate = useNavigate()
  return (
  <>
  
    <div className="homeContainer">
    <div className="start">
       <p>Please sign up to access our delicious recipes.</p>
      <button 
      // onMouseOver={()=> setIsHovered(true)}
      onClick={()=> Navigate("/Register")}
      className="homeButon">Get Started</button>
    </div>
     
    </div>
  </>

    
  )
}

export default Home
