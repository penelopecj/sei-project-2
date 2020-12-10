/* eslint-disable no-unused-vars */
import React from 'react'

import { getRecipeInfo } from '../../lib/api'
// import { useForm } from '../../util/useForm'

function RecipeForm(){
  const [url, setUrl] = React.useState()
  // const { formata, handleChange } = useForm({
  //   recipe:''
  // })
  //'https://www.bbc.co.uk/food/recipes/classic_carrot_cake_08513'
  const [ingredients, setIngredients] = React.useState()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRecipeInfo(url)
        console.log(data)
        setIngredients(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  
  const handleChange = (event) => {
    setUrl(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    
  }

  console.log('url:', url)


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
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecipeForm
