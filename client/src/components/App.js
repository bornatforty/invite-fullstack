import React, { Component } from 'react'
import '../styles/App.css'
import 'font-awesome/css/font-awesome.min.css'
import {Provider} from 'react-redux'
import store from '../store'
import Invite from './Invite'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Going from './Going'
import Notgoing from './Notgoing'

class App extends Component {
	
  render () {
    return (
      <Provider store={store}>
        <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Invite} />
              <Route path="/going" component={Going} />
              <Route path="/notgoing" component={Notgoing} />
              </Switch>
          </div>
        </Router>
        </div>
        </Provider>
    )
  }
}


export default App


