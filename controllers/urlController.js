const ShortUrl = require('../models/ShortUrl');
const isURL = require('validator').isURL;
const dns = require('dns');


const urlRegex = /^https?:\/\/(.*)/i;
exports.addUrl = (req, res) => {
  let fullUrl = req.body.url;
  if(!isURL(fullUrl)) {
    res.json({"error":"invalid URL"});
  } else {
    let endSlash  = fullUrl.match(/(\/*)$/i);
    fullUrl = fullUrl.replace(/(\/*)$/i,'');
    let url = new URL(fullUrl);
    dns.lookup(url.hostname, (err) => {
      if(err) {
        res.json({"error":"invalid Hostname"});
      } else {
        ShortUrl.findOne({original_url: fullUrl}, (err, data) => {
          if (err) return;
          if(data) {
            res.json({"original_url": data.original_url, "short_url": data.short_url});
          } else {
            let newEntry = new ShortUrl({original_url: fullUrl});
            newEntry.save((err, data) => {
              if (err) return;
              res.json({"original_url": data.original_url, "short_url": data.short_url});
            });
          }
        });
      }
    });
  }
}

exports.getFullUrl = (req, res) => {
  let shortUrl = req.params.surl;
  if(!parseInt(shortUrl, 10)) {
    res.json({"error":"Wrong Format"});
  } else {
    ShortUrl.findOne({short_url: shortUrl}, (err, data) => {
      if (err) return;
      if(data) {
        res.redirect(data.original_url);
      } else {
        res.json({"error":"No short url found"});
      }
    });
  }
}

//  original_url: {type: String, required: true},      short_url: {type: Number, default: 1}