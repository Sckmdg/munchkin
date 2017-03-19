import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { rootReducers } from './reducers'
import Munchkin from './components/Munchkin'
import DevTools from './containers/DevTools';
// import config from '../config';

const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.store = configureStore({}, rootReducers)
  }

  render () {
    return (
      <Provider store={this.store}>
        <div>
          <Munchkin />

          { /** Embed the DevTools component only when in development. **/}
          {!isProduction && <DevTools />}
        </div>

      </Provider>
    )
  }
}

export default App
