import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import io from 'socket.io';

import events from './events';

import { Message } from './classes/Message.js'
import { User } from './classes/User.js'

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
 * Socket.IO server. "C" is for Caeli / Campfire
 */
const C = io(server);

C.on('connection', (socket) => {
	events.join(socket.id)
	socket.emit(
		'chat message',
		new Message(
			"Welcome, my friend, to the new Caeli!",
			new User(
				"Mattia Sinisi",
				"c4mpf1r3.10"
			)
		)
	)

	socket.on('subscribe', function(room){
		socket.join(room)
		
		socket.on('chat message', function(msg){
			C.to(room).emit('chat message', msg)
		})
	})
	
});