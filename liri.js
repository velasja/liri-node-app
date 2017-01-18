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

if (command === 'spotify-this-song' && typeof input == '')

	// movie-this

	// do-what-it-says