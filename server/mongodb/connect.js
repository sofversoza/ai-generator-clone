import mongoose from "mongoose"

const connectDB = (url) => {
	// for search functionality
	mongoose.set("strictQuery", true)

	// connect our database
	mongoose
		.connect(url)
		.then(() => console.log("MongoDB connected"))
		.catch((err) => console.log(err))
}

// so we can import it in index.js
export default connectDB
