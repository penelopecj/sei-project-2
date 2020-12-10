import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// ! Create Account:
// * User makes a profile with their food preferences and vegan, vegetarian, dairy free etc. (these fields are a little over-sensitive)
// Navigate to next stage of registration.
//  * On next page display tick boxes and a long list of allergy ingredients.
// User can search by gluten, dairy, seafood.
//  * User can also just type in a search item in the search bar to see if any items match.
// Save this to user profile.
//  * User can login.
// User details are stored in localStorage.

// ! Once user is logged in:
// Next you can input your recipe name and recipe into the form field to have the data analysed. Click + to add more recipes.
//  * It will axios.get from the api and return a big object with all of the information.
// We will use a forEach function to check if the name key in each ingredient matches any of your allergies.
//  * The recipe name will display at the end.
// Each of your food allergy items will display in green if it meets the criteria or red if it is something you are allergic to that is in the recipe.
//  * Page will display contains gluten or contains dairy if it matches that allergy.