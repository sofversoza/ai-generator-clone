import express from "express"
import * as dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"

// our post model
import Post from "../mongodb/models/post.js"

// init dotenv to make sure our environment vars being populated
dotenv.config()

// create a new router instance
const router = express.Router()

export default router
