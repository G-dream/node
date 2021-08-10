// 入口


export default function(app, dbo) {
	console.log('hhhh')
	app.get('/getChen',function(req,res){
		dbo.findOne({name:'chen'},function(e,r){
			if(e) throw e;
			console.log(r)
			res.send(r)
		})
	})
	app.post('/getGuo',function(req,res){
		dbo.findOne({name: 'guo'},function(e,r){
			if(e) throw e;
			console.log(r)
			res.send(r)
		})
	})
	
}