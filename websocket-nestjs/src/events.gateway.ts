import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('yyy')
  handleMessage(@MessageBody() data: any): WsResponse<string> {
    console.log(data);
    this.server.emit('xxx', '誰かがボタンを押したよ');
    return { event: 'message', data: data };
  }
}
