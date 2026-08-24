console.log('Server is running...')
const express = require('express')
const app = express()
const http = require('http')

//1: Kirish kodlari
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//2: Session kodlari

//3: View kodlari
app.set('views', 'views')
app.set('view engine', 'ejs')

//4: Routing kodlari
app.get('/', function (req, res) {
	res.end(`<h1>Hello World!</h1>`)
})
app.get('/hello', function (req, res) {
	res.end(`<h1 style="color: red;">Hello World! by Ismatbek</h1>`)
})

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function () {
	console.log(`Server is running on http://localhost:${PORT}`)
})
