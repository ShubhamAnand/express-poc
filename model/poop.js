var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PoopSchema = new Schema({
    name: String,
    source: String,
    imgUrl: String,
    date: Date,
    description: String,
    likes: Number,
    comments: [{
      userName: String,
      content: String,
      likes: Number,
      date: Date
    }]
});

module.exports = mongoose.model('poop', PoopSchema);
