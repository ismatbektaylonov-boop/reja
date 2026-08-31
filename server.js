const http = require('http')
const mongodb = require('mongodb')

let db
const connectionString =
	'mongodb+srv://ismatbektaylonov_db_user:m0Lehgx4x4qxg71C@cluster0.zoflhhq.mongodb.net/?appName=Cluster0'

mongodb.connect(
	connectionString,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, client) => {
		if (err) console.log('ERROR on connection MongoDB')
		else {
			console.log('MongoDB connection succeed')

			db = client.db('Reja')

			module.exports = {
				db: function () {
					return db
				},
			}

			const app = require('./app')
			const server = http.createServer(app)
			let PORT = 3000
			server.listen(PORT, function () {
				console.log(
					`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
				)
			})
		}
	},
)
