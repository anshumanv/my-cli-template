'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: '{{ web }}'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/{{ twitter }}'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/{{ github }}'
	},
	{
		label: 'Blog',
		url: '{{ blog }}'
	},
	{
		label: 'Contact',
		url: '{{ email }}'
	},
	{
		label: 'linkedIn',
		url: 'https://linkedin.com/in/{{ linkedin }}'
  },
  /*
	{
		label: 'Your own label',
		url: 'Url to open for that label'
  },
  */
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>{{ description }}</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
