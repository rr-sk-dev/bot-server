import { Elysia } from 'elysia';
import { createWebSocket } from './socket';

const port = process.env.SERVER_PORT || 3000;

const app = new Elysia().get('/', () => 'Hello Elysia').listen(port);
createWebSocket();

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
