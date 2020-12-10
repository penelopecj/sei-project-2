/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './components/auth/Main'
import Login from './components/auth/Login'
import RecipeForm from './components/common/RecipeForm'
import Register from './components/auth/Register'
import Nav from './components/common/Nav'



function App() {

  //create a user state in the main App.js that contains an object with the users data
  const [user, setUser] = React.useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    allergies: [],
  }
  )

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/recipes" component={RecipeForm} />
      </Switch> 
    </BrowserRouter>
  )
}

export default App
