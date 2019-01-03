import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './landingPage'
import Signup from './signup'
import Login from './login'
import Main from './main'


export default class App extends React.Component {
  render () {

    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/main' component={Main}/>
      </div>
    )
  }
}
