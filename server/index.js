import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

// allows us to pull our environment variables from .env file
dotenv.config()

// init express
const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

// api endpoints we can connect to from client side
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

// our routes
app.get("/", async (req, res) => {
	res.send("Hello from DALL-E!")
})

// to run our express application & start the server
// connect to the database (mongoDB) which can fail so try&catch block
const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL)
		app.listen(8080, () => console.log("Server started on port http://localhost:8080"))
	} catch (err) {
		console.log(err)
	}
}
startServer()
