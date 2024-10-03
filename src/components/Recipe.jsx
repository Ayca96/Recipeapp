

import '../css/Recipe.css';
import { RecipeContext } from '../context/AuthContext';
import { useContext } from 'react';



function Recipe() {
  const {setQuery, setMealType, getData}=useContext(RecipeContext);
 

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    getData()
    
    
    
    }

  return (
    <div className='recipeContainer'>
      <p className='recipepar'>Recipes</p>
      <form onSubmit={handleSubmit} className='recipeFormContainer'>
        <input className='formInput' type="text" placeholder='search'
           onChange={(e)=>setQuery(e.target.value)}
        />
        <button className='formButton' type="submit">Search</button>

        <select className='formSelect' name="mealtypes" id="mealtypes"
        onChange={(e)=> setMealType(e.target.value)}>

        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Teatime">Teatime</option>

        </select>
      </form>

      
    </div>
  )
}

export default Recipe