const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

const app     = express();

app.use(morgan('tiny'));
app.use(express.static('public'));

// sets up ejs engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const videos = [
    {id: 1, comedian: "Judah Friedlander", title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, comedian: "Michael Che", title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, comedian: "Ali Wong", title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];

// sets up landing page for videos array of objects
// uses index.ejs file to dynamically post
// title and comedian name
app.get("/videos", (req, res) => {
  res.render("videos/index", {videos: videos});
});

// set up to show specific video request by user
app.get("/videos/:id", (req, res) => {
  let data = {
    comedian: videos[req.params.id - 1].comedian,
    title: videos[req.params.id - 1].title,
    url: videos[req.params.id - 1].url
  }
  res.render('videos/show', data)
});
 app.get('/vids/:id', (req, res) => {
   let num = req.params.id -1;
   let data = {
     comedian: videos[num].comedian,
     title: videos[num].title,
     url: videos[num].url
   }
   res.render('videos/show', data)
 });

// uses ejs engine and views to dynamically populate variables
app.get('/helloworld', (req, res) => {
  let data = {
   message: 'Hello Big Old World!',
   documentTitle: 'Comedy Videos!!',
   subTitle: 'Watch some of the coolest comedy videos around.',
   showMore: true,
   comedians: ['John Mulaney', 'Michael Che', 'Maria Bamford'],
 }
  res.render('index', data)
})

// routes to local server home page
// my page with buttons to show or hide pictures
// of dogs playing soccer
app.get('/home', (req, res) =>
  res.sendFile('index.html', {root: __dirname + "/public"}));

// routes to 404 page when no other route is found
app.get('*', function(req, res) {
  res.sendFile('error.html', {root: __dirname + "/public"})
});


// sets up server to listen for requests
app.listen(3000, () => console.log('Example app listening on port 3000!'))
