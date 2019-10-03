const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ShortUrlSchema = new Schema({
  original_url: {type: String, required: true},
  short_url: {type: Number, default: 1}

});
let ShortUrl =  mongoose.model('ShortUrl', ShortUrlSchema);
module.exports = ShortUrl;