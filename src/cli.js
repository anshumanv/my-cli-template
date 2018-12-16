#!/usr/bin/env node
'use strict';
const meow = require('meow');
const termImg = require('term-img');
const got = require('got');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ {{ github }}
`);

const fallback = async () => {
  const { body: { avatar_url } } = await got('api.github.com/users/{{ github }}');
  const { body } = await got(avatar_url, {encoding: null});
	const image = await terminalImage.buffer(body);
	console.log(image);
};

(async () => {
	const { body: { avatar_url } } = await got('api.github.com/users/{{ github }}');
  const { body } = await got(avatar_url, {encoding: null});
  termImg(body, {fallback});

})();

render(h(ui));
