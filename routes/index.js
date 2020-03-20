var express = require('express');
var router = express.Router();


var request = require("request");

var options = {
    method: 'GET',
    url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
    headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '6c96d093bbmsh914bc6f0a4146fcp1c5bf3jsnb61c73ad5efb'
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var data = JSON.parse(body);
    router.get('/', function(req, res, next) {
        res.render('index', { data: data });
    });
});
/* GET home page. */


module.exports = router;