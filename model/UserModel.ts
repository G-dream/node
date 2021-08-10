const mongoose = require('mongoose')
const {userSchema} = require('../schema/user')
export const UserModel = mongoose.model('UserModel',userSchema)