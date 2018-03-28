const db = require('../controllers/db-helper')


exports.findAll = callback =>{
  const sqlStr = 'SELECT * FROM `topics`'
  db.query(sqlStr, (err,results) => {
    if(err){
      return callback(err)
    }
    callback(null,results)
  })
}

exports.create = (topic,callback) => {
  const sqlStr = 'INSERT INTO `topic` SET ?'
  db.query(
    sqlStr,
    topic,
    (err,results) => {
      if(err){
        return callback(err)
      }
      callback(null,results)
    }
  )
}

exports.updateById = (topic,callback) => {
  const sqlStr = 'UPDATA `topics` SET `title`=? `content`=? WHERE `id`=?'
  db.query(
    sqlStr,
    [
      topic.title,
      topic.content,
      topic.id
    ],
    (err,results) => {
      if (err){
        return callback(err)
      }
      callback(null,results)
    }
  )
}


exports.deleteById = (id,callback) => {
  const sqlStr = 'DELETE FROM `topics` WHERE `id`=?'
  db.query(
    sqlStr,
    [
      id
    ],
    (err,results) => {
      if (err) {
        return callback(err)
      }
      callback(null,results)
    }
  )
}