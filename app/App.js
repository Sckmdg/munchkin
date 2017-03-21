import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { rootReducers } from './redux/root'
import DevTools from './redux/utils/DevTools'
import MunchkinView from './views/MunchkinView'
import { Container } from 'semantic-ui-react'

const isProduction = process.env.NODE_ENV === 'production';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.store = configureStore({}, rootReducers)
  }

  render () {
    return (
      <Provider store={this.store}>
          <Container>
          <MunchkinView />
          { /** Embed the DevTools component only when in development. **/}
          {!isProduction && <DevTools />}
          </Container>
      </Provider>
    )
  }
}

export default App;
