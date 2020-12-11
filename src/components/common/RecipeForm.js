/* eslint-disable no-unused-vars */
import React from 'react'

import { getRecipeInfo } from '../../lib/api'
// import { useForm } from '../../util/useForm'
function RecipeForm(){
  const [url, setUrl] = React.useState(null) 
  const [input, setInput] = React.useState('')
  const [data, setData] = React.useState()
  // const [diets, setDiets] = React.useState()
  const [badIngredients, setBadIngredients] = React.useState([])
  
  React.useEffect(() => {
    if (!url) return
    const getData = async () => {
      try {
        const { data } = await getRecipeInfo(url)
        checkIngredients(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log('url at page load', url)
    getData()
  }, [url])
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const checkIngredients = (myRecipe) =>{
    const localStorageAllergies = window.localStorage.getItem('allergies')
    const localStorageVegetarian = window.localStorage.getItem('vegetarian')
    const localStorageVegan = window.localStorage.getItem('vegan')
    const localStorageGlutenFree = window.localStorage.getItem('glutenFree')
    const localStorageDairyFree = window.localStorage.getItem('dairyFree')

    const  ingredients  = myRecipe.extendedIngredients.map(ingredient =>{
      return ingredient.name
    }).filter(element => localStorageAllergies.includes(element))
    
    if (localStorageVegetarian === true) {
      ingredients.push('vegetarian')
    }
    if (localStorageVegan === true) {
      ingredients.push('vegan')
    }
    if (localStorageGlutenFree === true) {
      ingredients.push('gluten free')
    }
    if (localStorageDairyFree === true) {
      ingredients.push('dairy free')
    }
    
    console.log(ingredients)
    setBadIngredients(ingredients)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setUrl(input)
  }
  //* .glutenFree .dairyFree extendedIngredients[name]

  return (
    <div>
      <div className="column is-half">
        <h3 className="title is-3">Enter Your Recipe</h3>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="field">
              <label className="label">Recipe URL</label>
              <input onChange={handleChange} className="input" type="text" name="recipe" placeholder="Recipe URL" />
            </div>
            <div className="buttons">
              <button className="button is-info">Submit</button>
            </div>
            <h4 className="title is-4">Contains...</h4>
            {badIngredients.map(thing => {
              return <p key={thing}>{thing}</p>
            })}
          </div>
        </form>
      </div>
    </div>
  )
}
export default RecipeForm





