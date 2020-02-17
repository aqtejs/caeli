import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import io from 'socket.io';

import events from './events';

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
io(server).on('connection', (socket) => {
	events.join(socket.id)
	socket.emit('chat message', {
		from: {
			id: socket.id,
			username: 'Mattia Sinisi'
		},
		content: 'Welcome, my friend, to the new Caeli!',
		at: Date.now()
	})
});