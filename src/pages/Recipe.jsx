
import '../css/Recipe.css';

function Recipe() {
  return (
    <div className='recipeContainer'>
      <p className='recipepar'>Recipes</p>
      <form className='recipeFormContainer'>
        <input className='formInput' type="text" placeholder='search'/>
        <button className='formButton' type="submit">Search</button>

        <select className='formSelect' name="mealtypes" id="mealtypes">

        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Teatime">Teatime</option>

        </select>
      </form>

      {/* recipecard gelcek */}
    </div>
  )
}

export default Recipe