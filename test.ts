const mongoose = require('mongoose')
const {userModel} = require('./model/UserModel.ts')
console.log(userModel)

mongoose.connect('mongodb://localhost/taro2',(err:any) => {
	if(err) throw err;
	console.log('连接成功')
	const userDoc = new userModel({username: 'guo',age:12})
	userDoc.save() 
})