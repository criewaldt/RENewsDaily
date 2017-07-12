var parser = require('rss-parser');

var feeds = [{title:"New York Times - Real Estate (Residential)",url:"http://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml"},
         {title:"The Real Deal", url:"http://feeds.feedburner.com/trdnews"},
         {title:"Real Estate Weekly", url:"http://rew-online.com/category/residential/feed/"},
         {title:"New York Post - Real Estate" , url:"http://nypost.com/real-estate/feed/"},
         {title:"DNAinfo.com - Real Estate" , url:"https://www.dnainfo.com/new-york/topics/real-estate.rss"},
         {title:"Crain's New York - Business", url: "http://feeds.crainsnewyork.com/crainsnewyork/latestnews"}
         ];

function getFeedData(url, callback) {
    parser.parseURL(url, function(err, parsed) {
        //console.log("Found " + parsed.feed.entries.length + " items in " + parsed.feed.title);
        console.log(parsed.feed.title);
        callback(parsed.feed);
    });    
}
/*
feeds.forEach(function(feed) {
    parser.parseURL(feed.url, function(err, parsed) {
        console.log("Found " + parsed.feed.entries.length + " items in " + parsed.feed.title);
        parsed.feed.entries.forEach(function(entry) {
            //console.log(entry.title + ':' + entry.link);
        });
    });
});
*/

//getFeedData(feeds[1].url, function(results) { console.log(results.entries.length); });

module.exports = getFeedData;