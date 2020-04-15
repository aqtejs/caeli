import * as app from '@sapper/app';
import './scss/app.scss';

app.start({
	target: document.querySelector('#app')
}).then(() => {
	console.log("%c🔥 CAELI is UP 🔥", "font-size: 30px; font-weight: bold;");
	console.log("%cNoto con piacere che ti piace smanettare.\nSe te ne intendi di programmazione web sei\nil benvenuto a contribuire a questo progetto\nsu GitHub!", "color: blue");
}).catch(() => {
	console.error("Oh f**k, errors!");
});