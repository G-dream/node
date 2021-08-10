
export default function (){
	const mongoose = require('mongoose')
	mongoose.connect('mongodb://localhost/taro',(err:any) => {
		if(err) throw err;
		console.log('连接成功')
	})
}