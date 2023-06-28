import express from "express"
import * as dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"

// init dotenv to make sure our environment vars being populated
dotenv.config()

// create a new router instance
const router = express.Router()

// utilize openai api key from env file
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})

// create instance of openai
const openai = new OpenAIApi(configuration)

// dalle route
router.route("/").get((req, res) => {
	res.send("Hello from DALL-E!")
})

// call to openai
router.route("/").post(async (req, res) => {
	try {
		// prompt comes from client side
		const { prompt } = req.body

		// generate the image
		const aiResponse = await openai.createImage({
			prompt,
			n: 1,
			size: "1024x1024",
			response_format: "b64_json",
		})

		// get image out of the response
		const image = aiResponse.data.data[0].b64_json

		// then send it back to the client
		res.status(200).json({ photo: image })
	} catch (error) {
		console.log(error)
		res.status(500).send(error?.response.data.error.message)
	}
})

export default router
