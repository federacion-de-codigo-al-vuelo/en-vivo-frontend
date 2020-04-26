import * as sapper from '@sapper/app';

console.log('client.js',process.env.EN_VIVO_BACKEND_API_URL)



sapper.start({
	target: document.querySelector('#sapper')
});