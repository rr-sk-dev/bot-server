import { Elysia } from 'elysia';
import { createWebSocket } from './socket';

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);
createWebSocket();

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
