import express from 'express';
import { SERVER_URL} from "./constants";

const app = express();
// Define a route for the GET request
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  // Start the server
  app.listen(SERVER_URL, () => {
    console.log(`Server is running on ${SERVER_URL}`);
  });