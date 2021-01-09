//Require the stuff we need
import express from 'express';

//Build the app
const app = express();

//This is similar to Node.js' http module
//const app = http.CreateServer()

//Add some middleware 
app.use(req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

// Start it up!
app.listen(4000, () => console.log('Express is up and running'));