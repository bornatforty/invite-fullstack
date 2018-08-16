import axios from 'axios'
import store from '../store'


export function update(id, status) {
	axios.patch('api/users/' + id, {
		status: status
	}).then(resp => {
		getUsers()
	})
}


export function getUsers() {
	axios.get('/api/users').then(resp => {
			store.dispatch({
				type: 'GET_USERS',
				payload: resp.data
			})
		})
}
export function getGoing() {
	axios.get('/api/going').then(resp => {
			store.dispatch({
				type: 'GET_GOING',
				payload: resp.data
			})
		})
}
export function getNotgoing() {
	axios.get('/api/notgoing').then(resp => {
			store.dispatch({
				type: 'GET_NOTGOING',
				payload: resp.data
			})
		})
}