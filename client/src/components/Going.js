import React, { Component } from 'react'
import {getGoing} from '../actions/actions'
import {connect} from 'react-redux'

class Going extends Component {
	componentDidMount() {
		getGoing()
	}
 render() {
   return (
   	<div className="going">
   		{this.props.going.map((user, i) => (
        	<div className="card" key={user.id}>
        		<img src={user.image} alt={user.name}/>
        		<div className="info">
        			<p className="name">Name: {user.name}</p>
        			<p>Email: {user.email}</p>
        			<p>Phone: {user.phone}</p>
   				</div>
   			</div>
   			))}
     </div>
   )
 }
}

function mapStateToProps(appState) {
	return {
		going: appState.going
	}
}

export default connect(mapStateToProps)(Going)