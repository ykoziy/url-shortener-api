const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let ShortUrlSchema = new Schema({
  original_url: {type: String, required: true}
});
ShortUrlSchema.plugin(AutoIncrement, {inc_field: 'short_url'});
let ShortUrl =  mongoose.model('ShortUrl', ShortUrlSchema);
module.exports = ShortUrl;