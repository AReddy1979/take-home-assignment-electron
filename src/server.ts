import express, { Request, Response } from 'express';
import { SERVER_PORT} from "./constants";
const cors = require('cors');
const app = express();

// Define a route for the GET request
  app.get('/', (req: Request, res: Response) => {
    const { spawn } = require('child_process');
    //const pythonProcess = spawn('python3', ['./python/main.py','greet','Daniel']);
    const pythonProcess = spawn('python3', ['./python/main.py','square','4']);

// Listen for data from the Python script
    pythonProcess.stdout.on('data', (data: any) => {
      const tJSON = {
        result: data.toString(),
        success: "test worked"
      }
      res.send(tJSON);
    });

    // Listen for errors from the Python script
    pythonProcess.stderr.on('data', (data: any) => {
      const tJSON = {
        result: `Error: ${data.toString()}`,
        success: "test worked"
      }
      res.send(tJSON);
    });

    // Listen for Python script to close
    pythonProcess.on('close', (code: any) => {
      //console.log(`Python script exited with code ${code}`);
    });
  });
  
  // Start the server
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  });
 