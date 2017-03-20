import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { rootReducers } from './redux/root'
import Munchkin from './views/MunchkinView'
import DevTools from './redux/utils/DevTools';

const isProduction = process.env.NODE_ENV === 'production';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.store = configureStore({}, rootReducers);
  }

  render () {
    return (
      <Provider store={this.store}>
        <div className='container'>
          <Munchkin />

          { /** Embed the DevTools component only when in development. **/}
          {!isProduction && <DevTools />}
        </div>

      </Provider>
    )
  }
}

export default App;
