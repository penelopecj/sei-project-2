/* eslint-disable no-unused-vars */
import React from 'react'
import monster from '../../images/cookie-monster.png'
import { getRecipeInfo } from '../../lib/api'
// import useForm from '../../util/useForm'

function Main( ) {

  const foods = [
    'apples',
    'carrots',
    'crab',
    'lobster',
    'milk',
    'eggs',
    'prawns',
    'cheese',
    'peanuts',
    'bread',
    'pasta'
  ]

  ////create a user state in the main App.js that contains an object with the users data
  const [user, setUser] = React.useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    allergies: [],
  }
  )
  // //include glutenfree, dairy free, vegan etc in the users data object
  // //include an empty array in the user data state

  // //let the user tick a box for the vegan, gluten free, and dairy free categories to set value to true or false
  // //let the user select from the tick boxes other allergies
  // in the handle submit function, push, filter, and add the new values
  // set the user state to a NEW object with all of their allergies
  

  // ])
  // const { formdata, handleChange, setFormdata } = useForm({
    
  // })


  // // Make an array of food items
  // // Map through the objects to create a JSX element for each food item

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


  // const handleSubmit = (event) => {
  //   event.preventDefault() 
  //   const newState = foods.filter(food => {
  //     if (event.target.checked) {
  //       return food
  //     }
  //   })
  //   setFoods(newState)



  return (
    <>
      <div className="columns section">
        <div className="column is-half">
          <figure className="image is-1by1">
            <img src={monster} alt="cookie monster" />
          </figure>
        </div>
        <div className="column is-half">
          <h3 className="title is-3">Tell us your allergies...</h3>
          <form>
            <div className="section">
              <h4 className="title is-4">I am:</h4>
              <div className="field">
                <label>Vegetarian</label>
                <input type="checkbox" />
              </div>
              <div className="field">
                <label>Vegan</label>
                <input type="checkbox" />
              </div>
              <div className="field">
                <label>Gluten Free</label>
                <input type="checkbox" />
              </div>
              <div className="field">
                <label>Dairy Free</label>
                <input type="checkbox" />
              </div>
              <h4 className="title is-4">I am allergic to:</h4>
              <div className="field">
                {foods.map(food => {
                  return (
                    <div key={food}>
                      <label>{food}</label>
                      <input type="checkbox" />
                    </div>
                  )
                })}
              </div>
            </div>
          </form>
        </div>
      </div>


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
    </>
  )
}

export default Main
