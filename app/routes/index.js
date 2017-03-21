import React from 'react'
import { Route, Redirect, IndexRedirect } from 'react-router'

import CoreLayout from '../views/layouts/CoreLayout'
import HomeView from '../views/Home/HomeView'
import SignupView from '../views/Signup/SignupView'

export default function (store) {
  return (
    <Route path='/' component={CoreLayout} >
      <Route path='/home' component={HomeView} />
      <Route path='/signup' component={SignupView} />
      <IndexRedirect to='/home' />
      <Redirect from='*' to='/' />
    </Route>
  )
}
