/* eslint-disable no-unused-vars */
import React from 'react'
import monster from '../../images/cookie-monster.png'
import { getRecipeInfo } from '../../lib/api'
import { Link } from 'react-router-dom'
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
    'pasta',
    'almonds',
    'brazil nuts',
    'cashew nuts',
    'macademia nuts',
    'pecans',
    'oysters',
    'shrips',
    'salmon'

  ]

  ////create a user state in the main App.js that contains an object with the users data
  const [user, setUser] = React.useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    allergies: [],
  })

  // ! Penny is going to try to rpoduce this data as an array of the allergies any as true or false values for each vegeetarian, vegen, etc.

  const [vegetarian, setVegetarian] = React.useState(() => {
    const currentState = window.localStorage.getItem('vegetarian')
    if (currentState) return JSON.parse(currentState)
    return false
  })
  const [vegan, setVegan] = React.useState(() => {
    const currentState = window.localStorage.getItem('vegan')
    if (currentState) return JSON.parse(currentState)
    return false
  })
  const [glutenFree, setGlutenFree] = React.useState(() => {
    const currentState = window.localStorage.getItem('glutenFree')
    if (currentState) return JSON.parse(currentState)
    return false
  })
  const [dairyFree, setDairyFree] = React.useState(() => {
    const currentState = window.localStorage.getItem('dairyFree')
    if (currentState) return JSON.parse(currentState)
    return false
  })

  const [allergies, setAllergies] = React.useState(() => {
    const currentState = window.localStorage.getItem('allergies')
    if (currentState) return JSON.parse(currentState)
    return []
  })



  //what if we create a new state for each question like veg veg to set true false value
  // we also create a new state that can hold the array with each food checked added in 
  // then set the user state object to include these new updated sates when you hit submit on the url
  // use these state varibles to check and compare with the info from the api returning

  // ! Alberto to create a function to filter through the recipe data to find matching ingredients and true or false values
  // ! This function on submit

  // const handleInput = (event) => {
  //   const checkedFoods = foods.filter(food => {
  //     if (event.target.checked === true){
  //       return food
  //     }
      
  //   })
  //   console.log(checkedFoods)
  // }
  React.useEffect(() => {

  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('vegetarian', JSON.stringify(vegetarian))
  }, [vegetarian])
  const handleVegetarian = (event) => {
    setVegetarian(!vegetarian)
  }

  React.useEffect(() => {
    window.localStorage.setItem('vegan', JSON.stringify(vegan))
  }, [vegan])
  const handleVegan = (event) => {
    setVegan(!vegan)
  }

  React.useEffect(() => {
    window.localStorage.setItem('glutenFree', JSON.stringify(glutenFree))
  }, [glutenFree])
  const handleGlutenFree = (event) => {
    setGlutenFree(!glutenFree)
  }

  React.useEffect(() => {
    window.localStorage.setItem('dairyFree', JSON.stringify(dairyFree))
  }, [dairyFree])
  const handleDairyFree = (event) => {
    setDairyFree(!dairyFree)
  }


  React.useEffect(() => {
    window.localStorage.setItem('allergies', JSON.stringify(allergies))
  },[allergies])
  const handleChangeCheckbox = (event) => {
    if (allergies.includes(event.target.name)) {
      // const foodIndex = allergies.indexOf(event.target.name)
      setAllergies([...allergies])
      //Need to remove event.target.name
      //Need to uncheck box in UI too!
    } else {
      setAllergies([...allergies, event.target.name])
    }
  }



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
                <input type="checkbox" onChange={handleVegetarian} checked={vegetarian ? 'checked' : ''}/>
              </div>
              <div className="field">
                <label>Vegan</label>
                <input type="checkbox" onChange={handleVegan} checked={vegan ? 'checked' : ''} />
              </div>
              <div className="field">
                <label>Gluten Free</label>
                <input type="checkbox" onChange={handleGlutenFree} checked={glutenFree ? 'checked' : ''} />
              </div>
              <div className="field">
                <label>Dairy Free</label>
                <input type="checkbox" onChange={handleDairyFree} checked={dairyFree ? 'checked' : ''} />
              </div>
              <h4 className="title is-4">I am allergic to:</h4>
              <div className="field">
                {foods.sort().map(food => {
                  return (
                    <div key={food}>
                      <label>{food}</label>
                      <input type="checkbox" name={food} onChange={handleChangeCheckbox} checked={allergies.includes(food) ? 'checked' : ''}/>
                    
                    </div>
                  )
                })}
                {/* value={foodChecked}
                checked={foodChecked ? 'checked' : ''} */}
              </div>
              {/* <div className="buttons">
                <button className="button is-info">Confirm</button>
              </div> */}
            </div>
          </form>
        </div>
      </div>

      <Link className="button is-info" to="recipes">Continue</Link>
      
    </>
  )
}

export default Main
