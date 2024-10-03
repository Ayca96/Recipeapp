import React from 'react'
import Recipe from '../components/Recipe'

import RecipeCard from './RecipeCard'
import { useContext } from 'react'
import { RecipeContext } from '../context/AuthContext'
import { useEffect } from 'react'

const Recipes = () => {
  const {getData,recipes}=useContext(RecipeContext)

  // useEffect(()=>{
  //   getData()
  // },[]) // burda neden sonsuz döngüye giriyorrr?

  return (
    <div>


      <Recipe/>
     
      {recipes.length > 0  && (<RecipeCard />)}

  
    
      


    </div>
  )
}

export default Recipes