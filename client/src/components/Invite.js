import React, { Component } from 'react'
import {update, getUsers, getGoing, getNotgoing} from '../actions/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Invite extends Component {
  state = {
    status: []
  }
 componentDidMount() {
		getUsers()
    getGoing()
    getNotgoing()
	}

  	updateGoing = (id) => {
		update(id, 'going')
	}

	updateNotGoing = (id) => {
		update(id, 'notgoing')
	}
  render () {
    return (
      <div className="container">
      	<div className="stats">
	         <Link to='/going'>Going: {this.props.going.length}</Link>
    	     <Link to='/notgoing'>Not Going: {this.props.notgoing.length}</Link>
    	  </div>
        {this.props.users.map(user => (
        	<div className="card" key={user.id}>
        		<img src={user.image} alt={user.name}/>
        		<div className="info">
        			<p  className="name">Name: {user.name}</p>
        			<p>Email: {user.email}</p>
        			<p>Phone: {user.phone}</p>
        		</div>
        	   	<button type="submit" className="gButton" onClick={() => {this.updateGoing(user.id)}}><i className="fa fa-check"></i></button>
        		  <button type="submit" className="ngButton" onClick={() => {this.updateNotGoing(user.id)}}><i className="fa fa-times"></i></button>
        	</div>
        ))}
      </div>
    )
  }
}

Invite.defaultProps = {
	users: [],
	going: [],
	notgoing: []
}

function mapStateToProps(appState) {
	return {
		users: appState.users,
		going: appState.going,
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(Invite)