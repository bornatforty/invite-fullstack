import React, { Component } from 'react'
import '../styles/App.css'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import {update} from '../actions/actions'

class App extends Component {
	state = {
		users: []
	}

	componentDidMount() {
		axios.get('api/users').then(resp => {
			this.setState({
				users: resp.data
			})
		})
	}

	updateGoing = (e) => {
		if(this.props.status !== 'going') {
			update(this.props.id, 'going')
		}
	}

	updateNotGoing = (e) => {
		if(this.props.status !== 'notgoing') {
			update(this.props.id, 'notgoing')
		}
	}
  render () {
    return (
      <div className="container">
      	<div className="stats">
	      <p>Going: </p>
    	  <p>Not Going: </p>
    	</div>
        {this.state.users.map(user => (
        	<div className="card">
        		<img src={user.image} alt={user.name}/>
        		<div className="info">
        			<p key={user.id} className="name">Name: {user.name}</p>
        			<p>Email: {user.email}</p>
        			<p>Phone: {user.phone}</p>
        		</div>
        		<button type="submit" className="going" onClick={this.updateGoing}><i className="fa fa-check"></i></button>
        		<button type="submit" className="notgoing" onClick={this.updateNotGoing}><i className="fa fa-times"></i></button>
        	</div>
        ))}
      </div>
    )
  }
}

export default App
