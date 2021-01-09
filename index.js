//Require the stuff we need
import express from 'express';
import bodyParser from 'body-parser';

const HOST = '17.0.0.1';
const PORT = '5000';

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
app.listen(PORT, () => console.log(`Serving on port ${PORT}🤖`));

// MVC
//Model (Modelos)
//Views (Vistas)
//Controllers (Controladores)

//Body parser
//Transmitir data cliente -> servidor utilizando URLs 