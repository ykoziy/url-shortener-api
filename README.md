# URL Shortener Microservice
### Example usage:
https://yk-url-shorten-api.glitch.me
* Shorten URL
  * Send a POST request to https://yk-url-shorten-api.glitch.meapi/shorturl/new with value named url that has a has URL, for example https://www.google.com/
* Redirect to URL
  * https://yk-url-shorten-api.glitch.me/api/shorturl/2
### Example output:
* {"original_url":"https://github.com","short_url":2} - After adding URL with POST request.