// 入口
const {UserModel} = require('../model/UserModel')
export default function(app:any) {
	console.log('路由展开成功')
	app.get('/getUser',function(req:any,res:any){
		UserModel.find(req.query,(e:any,r:any)=>{
			if(e) throw e;
			console.log(r)
			res.send(r)
		})
	})
	// 获取所有用户列表
	app.get('/getUserList',function(req:any,res:any){
		const {size,current} = req.query
		const limit = size
		const skip = size * (current - 1)
		console.log(limit,skip)
		UserModel.find({},{username:1,age:1},{limit:Number(limit),skip:Number(skip)},(e:any,r:any)=>{
			if(e) throw e;
			console.log(r)
			res.send(r)
		})
	})
	// 添加
	app.post('/addUser',function(req:any,res:any){
		
		const userDoc = new UserModel(req.body)
		console.log('----')
		console.log(req.body)
		userDoc.save((err:any) => {
			if(err) throw err;
			res.send({
				msg:'新增成功'
			})
		})
	})
	// 修改用户
	app.put('/updateUser',function(req:any,res:any) {
		console.log('修改条件')
		console.log(req.body)
		console.log(req.body.username)
		UserModel.updateOne({username:req.body.username},{$set:req.body},function(e:any) {
			if(e) throw e;
			console.log(e)
			res.send({msg:'修改成功'})
		})
	})
	
}