// web serverni boshlash
console.log('Server is running...')
const express = require('express')
const app = express()
const http = require('http')
const fs = require('fs')

let user
fs.readFile('database/user.json', 'utf-8', function (err, data) {
	if (err) {
		console.log('ERROR:', err)
		return
	} else {
		user = JSON.parse(data)
	}
})

//1: Kirish kodlari
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//2: Session kodlari

//3: View kodlari
app.set('views', 'views')
app.set('view engine', 'ejs')

//4: Routing kodlari
app.post('/create-item', function (req, res) {
	console.log(req.body)
	res.json({ name: 'Ismatbek' })
})

app.get('/author', function (req, res) {
	res.render('author', {
		user: user,
	})
})

app.get('/', function (req, res) {
	res.render('reja')
})
// app.get('/hello', function (req, res) {
// 	res.end(`<h1 style="color: red;">Hello World! by Ismatbek</h1>`)
// })

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function () {
	console.log(`Server is running on http://localhost:${PORT}`)
})
