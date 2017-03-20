import React from 'react'
import { Route, Redirect, IndexRedirect } from 'react-router'
//App views
//TODO add Layout
import MunchkinView from './views/MunchkinView'

export default function (store) {
  return (
    <Route path='/' >
      <Route path='/login' />
      <Route path='/registration' />
      <Route path='/game/:hash/:id' component={MunchkinView} />
      <IndexRedirect to='/' />
      <Redirect from='*' to='/' />
    </Route>
  )
}
