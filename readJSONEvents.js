// $.getJSON("minneapolis600WeekendMay16th.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });
// var json = require('minneapolis600WeekendMay16th.json'); //(with path)

function getData() {
    var fs = require('fs');
    var file = __dirname + '/searchResults.json';

    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        data = JSON.parse(data);

        for (var i = 0; i < data.events.length; i++){
            if (data.events[i].event != null){
                console.log(data.events[i].event.url);
            }
        }
    });
}
getData();