import { Elysia } from 'elysia';

export const createWebSocket = () =>
  new Elysia()
    .ws('/ws', {
      message(ws, message) {
        console.log('\n--------------- Socket Message ---------------');
        console.log(message, '\n');

        ws.send(message);
      },
    })
    .listen(8080);
