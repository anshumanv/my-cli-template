module.exports = [
	{
		label: '🌐 Website',
		url: '{{ web }}'
	},
	{
		label: '🐦 Twitter',
		url: 'https://twitter.com/{{ twitter }}'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/{{ github }}'
	},
	{
		label: '✍️ Blog',
		url: '{{ blog }}'
	},
	{
		label: '📇 Contact',
		url: 'https://{{ contact }}'
	},
	{
		label: '💼 LinkedIn',
		url: 'https://linkedin.com/in/{{ linkedin }}'
  },
  /*
	{
		label: 'Your own label',
		url: 'Url to open for that label'
  },
  */
	{
		label: '🔚 Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];
