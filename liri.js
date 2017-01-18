var Twitter = require('twitter');
var command = process.argv[2];
var input = process.argv[3];
var keys = require('./keys.js');
var request = require("request");
var spotify = require('spotify');
var fs = require('fs');

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
function spotifyFn() {
	if (command === 'spotify-this-song' && input != null) { // This whole thing isn't working.

		spotify.search({ type: 'track', query: input }, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    } else {
		    	// console.log(data);
		    	var sResponse = data.tracks.items
		    	for (var i = 0; i < sResponse.length; i++) {
		    		console.log("Artist: " + sResponse[i].artists.name);
		    		console.log("Song: " + sResponse[i].name);
		    		console.log("Preview: " + sResponse[i].preview_url);
		    		console.log("Album: " + sResponse[i].album.name);
		    	};
		    };
		 
		});

	} else if (command === 'spotify-this-song' && input == null) {
		request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE", function(error, response, body) {
			console.log("Artist: " + JSON.parse(body).artists); // Not working
			console.log("Song: " + JSON.parse(body).name);
			console.log("Preview: " + JSON.parse(body).preview_url);
			console.log("Album: " + JSON.parse(body).album.name);
		});
	};
};
	
	// movie-this

if (command === 'movie-this' && input != null) {
	request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&tomatoes=true&r=json", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("imdb Rating: " + JSON.parse(body).imdbRating);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
			console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
		};
	});
} else if (command === 'movie-this' && input == null) {
	request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("imdb Rating: " + JSON.parse(body).imdbRating);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
			console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
		};
	});
}

	// do-what-it-says
spotifyFn();

if (command === 'do-what-it-says') {
	fs.readFile('random.txt', 'utf8', function(err, data) {
		if (err) throw err;

		dataString = data.split(',');
		command = dataString[0];
		input = dataString[1];

		spotifyFn();
	})
}