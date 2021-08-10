const mongoose = require('mongoose')
export const userSchema = new mongoose.Schema({
	username: String,
	age: {
		type: 'number',
		default: 18
	},
		
	sex: {
		type: Number,
		default:0
	}
})