const Streamlink = require('./Stream.js');

var link = 'twitch.tv/northernlion';
var stream = new Streamlink(link).quality('best').output('./' + Date.now() + '.flv').start();

stream.on('err', (err) => {
    console.log(err);
});

stream.on('end', (o) => {
    console.log("Stream ended");
    console.log(o);
});
