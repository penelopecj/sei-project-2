import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Index from './components/auth/Index'
import Login from './components/auth/Login'
import RecipeForm from './components/common/RecipeForm'
import Register from './components/auth/Register'
import Nav from './components/common/Nav'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/recipes" component={RecipeForm}/>
      </Switch> 
    </BrowserRouter>
  )
}

export default App
