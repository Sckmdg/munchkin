import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import {rootReducers} from './redux/root'
import DevTools from './redux/utils/DevTools'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {Router, useRouterHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureRoutes from './routes'

const isProduction = process.env.NODE_ENV === 'production';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.store = configureStore({}, rootReducers)

    // Browser History Setup
    this.history = syncHistoryWithStore(useRouterHistory(createBrowserHistory)({
      basename: process.env.BASENAME
    }), this.store);
    this.routes = configureRoutes(this.store, this.history);
  }

  render () {
    return (
      <Provider store={this.store}>
        <div className='container'>
          <Router history={this.history}>
            {this.routes}
          </Router>
          { /** Embed the DevTools component only when in development. **/}
          {!isProduction && <DevTools />}
        </div>
      </Provider>
    )
  }
}

export default App;
