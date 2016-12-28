var cheerio = require('cheerio');
var request = require('request');

var url = "http://clien.net/cs2/bbs/board.php?bo_table=park";

request(url, function(error, response, body) {
    if (error)
        throw error;

    var $ = cheerio.load(body);

    var postElements = $("div.board_main");

    postElements.each(function() {
        var postTitle = $(this).find("td.post_subject").text();

        console.log(postTitle)
    });
});
