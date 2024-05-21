import 'log-timestamp';
import * as http from 'http';

import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 1000;

class Server{
    
  public static start_server(port:string){
      const server = http.createServer((req:any, res:any) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Running!\n');
      });

      const PORT = port;
      server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
  }

}

export { Server };