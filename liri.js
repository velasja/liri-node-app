var Twitter = require('twitter');
var command = process.argv[2];
var input = process.argv[3];
var keys = require('./keys.js');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

if (command === 'my_tweets') {
	var params = {screen_name: 'jjvelasquez'};
	client.get('statuses/user_timeline/', params, function(error, tweets, response) {
	  if (!error) {
	    for (var i = 0; i < 20; i++) {
	    	console.log(tweets[i].created_at);
	    	console.log(tweets[i].text);
	    };	
	  }
	});
};
	// spotify-this-song

if (command === 'spotify-this-song' && typeof input == '') {
	var request = require("request");
	var track = 'i+want+it+that+way';
	request("https://api.spotify.com/v1/search?q=" + track + "&type=track&market=US", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			for (var i = 0; i < body.length; i++) {
				console.log("Artist: " + JSON.parse(body[i]).arists);
				console.log("Song: " + JSON.parse(body[i].))
			}
	})
}
	
	// movie-this

	// do-what-it-says