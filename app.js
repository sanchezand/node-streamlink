const Streamlink = require('./Stream.js');

var link = 'twitch.tv/northernlion';
var stream = new Streamlink(link).output('./' + Date.now() + '.flv').start();

stream.getQualities();

stream.on('quality', (data) => {
    console.log(data);
});

stream.on('err', (err) => {
    console.log(err);
});

stream.on('end', (o) => {
    console.log("Stream ended");
    console.log(o);
});
