var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10

var UsersSchema = new mongoose.Schema({
  name: {
    unipue: true,
    type: String
  },
  password: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UsersSchema.pre('save', function(next){
  var user = this
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if( err ) return next(err)

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)

        user.password = hash
        next()
      })
  })
})

UsersSchema.statics = {
  fetch: function(cb){
    return this
    .find({})
    .sort('meta.updateAt')
    .exec(cb)
  },
  finById: function(id, cb) {
    return this
    .find({_id: id})
    .exec(cb)
  }
}

module.exports = UsersSchema