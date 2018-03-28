const Topic = require('../models/topic')
const moment = require('moment')

exports.showCreate  = (req,res) => {
  res.render('topic/creater.html')
}

exports.create = (req,res) => {
  const body = rep.body

  body.userId = req.srssion.user.userId
  body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  
  Topic.create(body,(err,results) => {
    if (err) {
      return res.send({
        code:500,
        message:err.message
      })
    }
    res.send({
      code:200,
      massage:'创建话题成功'
    })
  })
}

exports.show = (req, res) => {
  res.send('show')
}

exports.showEdit = (req, res) => {
  res.send('showEdit')
}

exports.edit = (req, res) => {
  res.send('edit')
}

exports.delete = (req, res) => {
  res.send('delete')
}
