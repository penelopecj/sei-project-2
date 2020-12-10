import React from 'react'
import monster from '../../images/cookie-monster.png'
// import useForm from '../../util/useForm'

function Index() {
  //create a user state in the main App.js that contains an object with the users data
  //include glutenfree, dairy free, vegan etc in the users data object
  // include an empty array in the user data state
  // pass the user state into THIS component
  // pass the user state into the recipe checker component
  // let the user tick a box for the vegan, gluten free, and dairy free categories to set value to true or false
  // let the user select from the tick boxes other allergies
  // in the handle submit function, push, filter, and add the new values
  // set the user state to a NEW object with all of their allergies
  // navigate to the recipe checker page

  const [foods, setFoods] = React.useState([
    'apples',
    'carrots',
    'crab',
    'lobster'
  ])

  // const [foods, setFoods] = React.useState([
  //   {
  //     name: 'apples',
  //     allergy: false,
  //   }, 
  //   { 
  //     name: 'carrots',
  //     allergy: false,
  //   },
  //   {
  //     name: 'crab',
  //     allegy: false,
  //   },
  //   {
  //     name: 'lobster',
  //     allergy: false,
  //   }

  // ])
  // const { formdata, handleChange, setFormdata } = useForm({
    
  // })


  // // Make an array of food items
  // // Map through the objects to create a JSX element for each food item

  const handleChange = (event) => {
    
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
    const newState = foods.filter(food => {
      if (event.target.checked) {
        return food
      }
    })
    setFoods(newState)
    // When submitted, filter through all check boxes
    // setFoods(foods.map(food => {
    //   if (food /* food checkbox is checked */) {
    //     food.allergy = true
    //   }
    //   return food
    // }))
    //version2
    // if event.target.checked === true, return food item to new array
    // on next page, check if each item in the array matches the name of any of the ingredients in the recipe

    //version 1
    // If checkbox is checked, set allergy on that object to true
    // Store new array in local storage
    console.log('You registered a new account!')
  }

  return (
    <div className="columns section">
      <div className="column is-half">
        <figure className="image is-1by1">
          <img src={monster} alt="cookie monster" />
        </figure>
      </div>
      <div className="column is-half">
        <h3 className="title is-3">Tell us your allergies...</h3>
        <form onSubmit={handleSubmit}>
          <ul className="section">
            <div className="field">
              {foods.map(food => {
                return (
                  <div key={food.name}>
                    <label>{food.name}</label>
                    <input type="checkbox" name="username" onChange={handleChange}/>
                  </div>
                )
              })}
              
            </div>
          </ul>
            
          <div className="buttons">
            <button className="button is-info">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index
