const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let ShortUrlSchema = new Schema({
  original_url: {type: String, required: true},
  short_url: {type: Number, default: 1}

});
ShortUrlSchema.plugin(AutoIncrement, {inc_field: 'id'});
let ShortUrl =  mongoose.model('ShortUrl', ShortUrlSchema);
module.exports = ShortUrl;