const mysql = require ('mysql')
const moment = require ('moment')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123',
  database:'ithub'
})

exports.showSignin = (req,res) => {
  res.render('signin.html')
}

exports.signin = (req,res) => {
  res.render('signin')
}

exports.showSignup = (req,res) => {
  res.render('signup.html')
}

exports.signup = (req,res) => {
  // 验证邮箱
  const body = req.body
  connection.query(
    'SELECT * FROM `users` WHERE `email`=?',[body.email],
    (err,results) => {
      if(err){
        return res.send({
          cond:500,
          message:err.message
        })
      }
      if(results[0]){
        return res.send({
          code:1,
          message:'邮箱已被占用'
        })
      }
      // 验证昵称
      connection.query(
        'SELECT * FTOM `users` WHERE `nikename`=?',
        [body,nickname],
        (err,results) =>{
          if(err){
            return res.send({
              code:500,
              message:err.message
            })
          }
          if(results[0]){
            return res.send({
              cond:2,
              message:'昵称已被占用'
            })
          }
          body.createAt = moment().format('YYYY-MM-DD HH:mm:ss')
          const sqlStr = 'INSERT INTO `users` SET ?'
          
        }
      )
    }
  )
}

