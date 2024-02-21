import express, { Request, Response } from 'express';
import { SERVER_PORT} from "./constants";
const app = express();

function findPath(inputString:string) {
  // Find the index of the last occurrence of '/'
  const os = isWin();
  const arr = os ? inputString.split('\\') : inputString.split('/');

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "take-home-assignment-electron") {
      console.log(arr.slice(0,i+1).join("/"));
      return isWin() ? arr.slice(0,i+1).join("/")+"\\src\\python\\main.exe" : arr.slice(0,i+1).join("/")+"/src/python/dist/main";
    }
  }

  throw new Error("Path Not Recognized. Make sure Folder isn't renamed");
}

//Check what Operating System currently is
function isWin() {
  if (process.platform === 'win32') {
    console.log('Current system is Windows');
    return true;
  } else if (process.platform === 'darwin') {
    console.log('Current system is macOS');
    return false;
  } else {
    throw new Error("Current system is not Windows or macOS");
  }
}

// Define a route for the GET request
  app.get('/', (req: Request, res: Response) => {
    const { spawn } = require('child_process');
    const pathName = findPath(__dirname);
    //const pythonProcess = spawn(pathName, ['square','4']);
    const pythonProcess = spawn(pathName, ['greet','Daniel']);

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

//module.exports = app;
 