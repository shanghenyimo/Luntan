const moment = require('moment')
const connection = require('./db-helper.js')
const User = require('../models/user')
const md5 = require('md5')

exports.showSignin = (req,res) => {
  const body = req.body
  User.getByEmail(body.email, (err,user) => {
    if(err) {
      return res.send({
        code:500,
        message:err.message
      })
    }
    if(!user) {
      return res.send({
        code:1,
        message:'用户名不存在'
      })
    }

    if(md5(body.password) !== user.password){
      return res.send({
        code:2,
        message:'密码不正确'
      })
    }

    req.session.user = user
    res.send({
      code:200,
      message:'登录成功'
    })
  })
}

exports.showSignin = (req,res) => {
  res.render('signup.html')
}

exports.signup = (req,res) => {
  const body = req.body
  User.getByEmail(
   body.email,
   (err,user) => {
     if (err) {
       return res.send({
         code:500,
         message:err.message
       })
     }
     if (user) {
       return res.send({
         code:1,
         message:'邮箱已被占用'
       })
     }

     User.getByNickname(
       body.nickname,
       (err,user) => {
         if (err) {
           return res.send({
             code:500,
             message:err.message
           })
         }

         if (user) {
           return res.send({
             code:2,
             message:'昵称已被占用'
           })
         }

         
       }
     )
   }
  )
}