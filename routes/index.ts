// 入口
const {UserModel} = require('../model/UserModel')
// 引入用户模块接口
const UserApi = require('../routes/user').default
// 引入其他接口

export default function(app:any) {
	console.log('index api')
	UserApi(app)
	// ...
	
}