const mongoose = require('mongoose')
const {userModel} = require('./model/UserModel.ts')
console.log(userModel)

mongoose.connect('mongodb://localhost/taro2',(err:any) => {
	if(err) throw err;
	console.log('θΏζ₯ζε')
	const userDoc = new userModel({username: 'guo',age:12})
	userDoc.save() 
})