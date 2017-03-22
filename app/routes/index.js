import React from 'react'
import { Route, Redirect, IndexRedirect } from 'react-router'
// Views
import CoreLayout from '../views/layouts/CoreLayout'
import AppLayout from '../views/layouts/AppLayout'
import HomeView from '../views/Home/HomeView'
import SignupView from '../views/Signup/SignupView'

export default function (store) {
  return (
    <Route component={CoreLayout} >
      <Route component={AppLayout}>
        <Route path='/' component={HomeView} />
        <Route path='/signup' component={SignupView} />
      </Route>
      <IndexRedirect to='/' />
      <Redirect from='*' to='/' />
    </Route>
  )
}
