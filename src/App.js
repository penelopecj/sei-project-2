import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'
import RecipeForm from './components/RecipeForm'
import Intolerances from './components/Intolerances'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/intolerances" component={Intolerances}/>
        <Route path="/login" component={Login}/>
        <Route path="/recipes" component={RecipeForm}/>
      </Switch> 
    </BrowserRouter>
  )
}

export default App
