import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import RecipeForm from './components/common/RecipeForm'
import Intolerances from './components/auth/Intolerances'
import Nav from './components/common/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route path="/intolerances" component={Intolerances}/>
        <Route path="/login" component={Login}/>
        <Route path="/recipes" component={RecipeForm}/>
      </Switch> 
    </BrowserRouter>
  )
}

export default App
