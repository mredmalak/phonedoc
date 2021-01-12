//Require the stuff we need
import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import httpLoggerMiddleware from './middleware/logger-middleware.js';
//import jsonResponse from './middleware/json-response.js';
//import musicRouter from './routes/music.js';


const HOST = '127.0.0.1';
const PORT = 5000;

//Build the app
const server = express();

server.use(bodyParser.json());
server.use(httpLoggerMiddleware);
// server.use(jsonResponse);
// server.use(musicRouter);

//TODO
server.use(bodyParser.json());

//This is similar to Node.js' http module
//const app = http.CreateServer()

//Add some middleware
// app.use(req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello world!');
// });

// Start it up!

const noEndpointHandler = (request, response, next) => {
  console.log('touching an endpoint');
};

server.get('*', noEndpointHandler);

server.listen(PORT, () => console.log(`Serving on port ${PORT}🤖`));

// MVC
//Model (Modelos)
//Views (Vistas)
//Controllers (Controladores)

//Body parser
//Transmitir data cliente -> servidor utilizando URLs

server.listen(PORT, () =>
  logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
);

