import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import io from 'socket.io';

import events from './events';

import { Message } from './classes/Message.js'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const {server} = polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
		else console.log('⭐');
	});

/**
 * Socket.IO server
 */

const C = io(server);

C.on('connection', (socket) => {
	events.join(socket.id)
	socket.emit('chat message', {
		from: {
			username: 'Welcome [BOT]',
			id: socket.id
		},
		content: `Welcome, my friend, to the new Caeli!\nYour ID is the same as mine`,
		at: Date.now()
	})

	socket.on('chat message', function(msg){
		C.emit('chat message', msg)
	})
});