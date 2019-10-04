const ShortUrl = require('../models/ShortUrl');
const isURL = require('validator').isURL;
const dns = require('dns');

const sendResponse = (res, data) => {
  res.json({"original_url": data.original_url, "short_url": data.short_url});
}

const checkDns = (domain) => {
  return new Promise((resolve, reject) => {
    dns.lookup(domain, (err, addr) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
};

const urlRegex = /^https?:\/\/(.*)/i;
exports.addUrl = (req, res) => {
  let fullUrl = req.body.url;
  if(!isURL(fullUrl)) {
    res.json({"error":"invalid URL"});
  } else {
    let endSlash  = fullUrl.match(/(\/*)$/i);
    fullUrl = fullUrl.replace(/(\/*)$/i,'');
    let url = new URL(fullUrl);
    checkDns(url.hostname).then(() => {
      return ShortUrl.findOne({original_url: fullUrl});
    })
    .then((data) => {
      if(data) {
          sendResponse(res, data);
      } else {
        let newEntry = new ShortUrl({original_url: fullUrl});
        return newEntry.save();
      }
    })
    .then((data) => {
      if (data) sendResponse(res, doc);
    })
    .catch((err) => {
      if(err.code === 'ENOTFOUND') {
        res.json({"error":"invalid Hostname"});
      }
      return;
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