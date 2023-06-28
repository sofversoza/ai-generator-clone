// our post model (we'll use this when generating new posts)

import mongoose from "mongoose"

// create our schema
const Post = new mongoose.Schema({
	name: { type: String, required: true },
	prompt: { type: String, required: true },
	photo: { type: String, required: true },
})

// creating a model out of the schema
const PostSchema = mongoose.model("Post", Post)

export default PostSchema
