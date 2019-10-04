const ShortUrl = require('../models/ShortUrl');

exports.addUrl = (req, res) => {
  // get: url, from POST body
  // check if passed url is valid
  // If url does not exist add it
  // otherwise add entry to the DB: {original_url, short_url}
  // short_url <- auto increment field - {$inc: { short_url: 1}
  res.send('TODO: addUrl');
}

exports.getFullUrl = (req, res) => {
  let shortUrl = req.params.surl;
  if(!parseInt(shortUrl, 10)) {
    res.json({"error":"Wrong Format"});
    return;
  }
  // get: param from req.params.shorturl
  // check if correct type, a number
  // for response, redirect to full url
  res.send('TODO: getFullUrl ' + shortUrl);
}

//  original_url: {type: String, required: true},      short_url: {type: Number, default: 1}