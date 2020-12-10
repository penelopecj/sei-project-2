import React from 'react'
import monster from '../../images/cookie-monster.png'

function Index() {
  const [foods, setFoods] = React.useState([
    {
      name: 'apples',
      allergy: false,
    }, 
    { 
      name: 'carrots',
      allergy: false,
    },
    {
      name: 'crab',
      allegy: false,
    },
    {
      name: 'lobster',
      allergy: false,
    }

  ])
  // // Make an array of food items
  // // Map through the objects to create a JSX element for each food item

  const handleChange = (event) => {
    console.log(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
    // When submitted, filter through all check boxes
    setFoods(foods.map(food => {
      if (food /* food checkbox is checked */) {
        food.allergy = true
      }
      return food
    }))
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
