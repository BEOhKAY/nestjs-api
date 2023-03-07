import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: ['http:localhost:3000'] } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(socket: Socket) {
    console.log({ socket });
    console.log('CONNECTION SUCCESS');
  }
  handleDisconnect(socket: Socket) {
    console.log({ socket });
    console.log('CONNECTION REMOVED');
  }
}
