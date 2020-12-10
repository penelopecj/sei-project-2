/* eslint-disable no-unused-vars */
import React from 'react'

import { getRecipeInfo } from '../../lib/api'
// import { useForm } from '../../util/useForm'

function RecipeForm(){
  const [url, setUrl] = React.useState(null) 
  const [input, setInput] = React.useState('')
  const [ingredients, setIngredients] = React.useState()

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setUrl(input)
    console.log('url when hit submit:', url)
  }


  React.useEffect(() => {
    if (!url) return
    const getData = async () => {
      try {
        const { data } = await getRecipeInfo(url)
        console.log(data)
        setIngredients(data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log('url at page load', url)
    getData()
  }, [url])


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
