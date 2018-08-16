import React, { Component } from 'react'
import {getNotgoing} from '../actions/actions'
import {connect} from 'react-redux'

class Notgoing extends Component {
	componentDidMount() {
		getNotgoing()
	}
 render() {
   return (
   	<div className="notgoing">
   		{this.props.notgoing.map((user, i) => (
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
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(Notgoing)