const express = require('express')
const router = express.Router()
const axios = require('axios')
const shortid = require('shortid')

/*
*Type: GET
path: /users
resp: {
	users: [
	{
	id: number,
	name: string,
	email: string,
	phone: string,
	image: string,
	status: string
	}
	]
}
*/

const data = {
	users: [],
	going: [],
	notgoing: []
}

router.get('/users', (req, res, next) => {
	if (data.users.length === 0) {
	axios.get('https://randomuser.me/api?results=20').then(resp => {
			const users = resp.data.results.map((user,i) => {
					return {
						id: shortid.generate(),
						name: user.name.first +' '+ user.name.last,
						email: user.email,
						phone: user.phone,
						image: user.picture.large,
						status: 'pending'
					} //creating an array of users
				})

				data.users = users
				res.json(users)
			})
			} else {
				res.json(data.users)
			}
		})
/*
type: PATCH
path: /users/:id
data: {status: string}
resp: {
	
	id: number,
	name: string,
	email: string,
	phone: string,
	image: string,
	status: string
}*/
router.patch('/users/:id', (req, res, next) => {
	const id = req.params.id //params is when you put something in the url
	const status = req.body.status

	const user = data.users.find(user => user.id === id)
	user.status = status
	data[status].push(user)

	data.users = data.users.filter(user => user.id !== id)
	res.json(user)
})

/*
type: GET
path: /user/:id
resp: {
	id: number,
	name: string,
	email: string,
	phone: string,
	image: string,
	status: string
}*/

router.get('/users/:id', (req, res, next) => {
	const id = req.params.id

	const user = data.users.find(user => user.id === id)

	res.json(user)
})

/*
type: GET
path: /users/going
resp: (same as above)
*/

router.get('/going', (req, res, next) => { //not users/going because that sets "going" in same place as ":id"
	res.json(data.going)
})

/*
type: GET
path: /users/not
resp: (same as above)
*/

router.get('/notgoing', (req, res, next) => {
	res.json(data.notgoing)
})
module.exports = router
