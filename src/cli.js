#!/usr/bin/env node
'use strict';
const meow = require('meow');
const termImg = require('term-img');
const got = require('got');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');
const cfonts = require('cfonts');
const iterm2Version = require('iterm2-version');
const ui = importJsx('./ui');

meow(`
	Usage
	  $ {{ github }}
`);

(async () => {
	const {body: {avatar_url}} = await got('api.github.com/users/{{ github }}', {json: true});
	const {body} = await got(avatar_url, {encoding: null});
	if (process.env.TERM_PROGRAM !== 'iTerm.app' || Number(iterm2Version()[0]) < 3) {
		await console.log(await terminalImage.buffer(body));
	} else {
		const smallAvatar = avatar_url + '&s=256';
		const {body} = await got(smallAvatar, {encoding: null});
		await termImg(body);
	}
	await cfonts.say('{{ github }}', {
		font: 'chrome',
		colors: ['cyan', 'blue', 'blueBright']
	});
	await render(h(ui));
})();
