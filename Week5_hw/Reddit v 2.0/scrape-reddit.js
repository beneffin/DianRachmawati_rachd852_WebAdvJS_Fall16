var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'); //?

request("https://www.reddit.com", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('div#siteTable > div.link').each(function( index ) {
    var title = $(this).find('p.title > a.title').text().trim();
    var score = $(this).find('div.score.unvoted').text().trim();
    var likes = $(this).find('div.score.likes').text().trim();
    var user = $(this).find('a.author').text().trim();
    var date = $(this).find('p.live-timestamp').text().trim();
    console.log("Title: " + title);
    console.log("Score: " + score);
    console.log("Likes: " + likes);
    console.log("User: " + user);
    console.log("Date: " + date);
    fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n' + date + '\n');
  });



});