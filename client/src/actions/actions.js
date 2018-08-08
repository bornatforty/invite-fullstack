import axios from 'axios'


export function update(id, status) {
	axios.patch('http://localhost:3001/api/' + id, {
		status: status
	})
}