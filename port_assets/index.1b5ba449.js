import {
	d as e,
	c as t,
	o,
	w as r,
	a as n,
	t as s,
	T as a,
	F as i,
	r as l,
	b as c,
	e as d,
	f as g,
} from './vendor.6b725a88.js';
!(function (e = '.', t = '__import__') {
	try {
		self[t] = new Function('u', 'return import(u)');
	} catch (o) {
		const r = new URL(e, location),
			n = (e) => {
				URL.revokeObjectURL(e.src), e.remove();
			};
		(self[t] = (e) =>
			new Promise((o, s) => {
				const a = new URL(e, r);
				if (self[t].moduleMap[a]) return o(self[t].moduleMap[a]);
				const i = new Blob(
						[`import * as m from '${a}';`, `${t}.moduleMap['${a}']=m;`],
						{ type: 'text/javascript' }
					),
					l = Object.assign(document.createElement('script'), {
						type: 'module',
						src: URL.createObjectURL(i),
						onerror() {
							s(new Error(`Failed to import: ${e}`)), n(l);
						},
						onload() {
							o(self[t].moduleMap[a]), n(l);
						},
					});
				document.head.appendChild(l);
			})),
			(self[t].moduleMap = {});
	}
})('/port_assets/');
var m = e({
	name: 'DropdownItem',
	props: { properties: { type: Object, required: !0 } },
	data: () => ({ hover: !1 }),
});
m.render = function (e, i, l, c, d, g) {
	return (
		o(),
		t(
			a,
			{ name: 'fade' },
			{
				default: r(() => [
					n(
						'div',
						{
							class:
								'flex flex-row py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl mx-1 px-2 cursor-pointer dark:text-gray-200 transform transition',
							onMouseover: i[1] || (i[1] = (t) => (e.hover = !0)),
							onMouseleave: i[2] || (i[2] = (t) => (e.hover = !1)),
						},
						[
							n(
								'button',
								{
									class: [
										'focus:outline-none select-none transform transition',
										e.hover ? 'opacity-100' : 'opacity-0',
									],
								},
								s('>'),
								2
							),
							n(
								'button',
								{
									class: [
										'focus:outline-none select-none transform transition',
										e.hover ? 'translate-x-3' : '',
									],
								},
								s(e.properties.value),
								3
							),
						],
						32
					),
				]),
				_: 1,
			}
		)
	);
};
var u = e({
	name: 'DropdownList',
	components: { DropdownItem: m },
	props: {
		items: { type: Array, required: !0 },
		id: { type: String, required: !0 },
	},
	computed: {
		title() {
			let e = this.id.split('_'),
				t = [];
			for (const o of e)
				t.push(o.slice(0, 1).toUpperCase() + o.slice(1).toLowerCase());
			return t.join(' ');
		},
	},
});
const p = {
		class:
			'flex flex-col font-bold bg-white rounded-xl p-4 pr-6 text-xl dark:bg-gray-800 shadow-2xl',
	},
	w = { class: 'mx-3 text-2xl select-none dark:text-gray-200' };
u.render = function (e, r, a, d, g, m) {
	const u = c('DropdownItem');
	return (
		o(),
		t('div', p, [
			n('p', w, s(e.title), 1),
			(o(!0),
			t(
				i,
				null,
				l(
					e.items,
					(r) => (
						o(),
						t(
							u,
							{
								onClick: (t) => {
									e.$emit(`${r.clickEvent}`, r.clickParams),
										'changeList' != r.clickEvent && e.$emit('toggleMenu');
								},
								properties: r,
							},
							null,
							8,
							['onClick', 'properties']
						)
					)
				),
				256
			)),
		])
	);
};
var h = e({
	name: 'DropdownMenu',
	data: () => ({ toggled: !1, currentList: '', hover: !1 }),
	props: {
		lists: { type: Object, required: !0 },
		start: { type: String, required: !0 },
	},
	computed: {
		currentDropdown() {
			return this.currentList || this.start;
		},
	},
	methods: {
		toggleMenu() {
			this.toggled = !this.toggled;
		},
		updateList(e) {
			this.currentList = e;
		},
		openLink(e) {
			window.open(e);
		},
	},
	components: { DropdownList: u },
});
const A = n(
		'path',
		{
			d:
				'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z',
		},
		null,
		-1
	),
	x = {
		key: 0,
		class: 'absolute mt-16 w-9/12 md:w-6/12 lg:w-3/12 xl:w-2/12 z-20',
	};
h.render = function (e, s, g, m, u, p) {
	const w = c('DropdownList');
	return (
		o(),
		t(
			'div',
			{
				class: 'flex flex-col m-2',
				onMouseenter: s[3] || (s[3] = (t) => (e.hover = !0)),
				onMouseleave:
					s[4] ||
					(s[4] = (t) => {
						(e.hover = !1), (e.toggled = !1);
					}),
			},
			[
				(o(),
				t(
					'svg',
					{
						onClick:
							s[1] || (s[1] = (...t) => e.toggleMenu && e.toggleMenu(...t)),
						class: [
							'w-16 z-10 h-16 bg-white shadow-xl rounded-3xl p-4 transform scale-75 transition duration-200 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 img-white fill-current text-gray-900 dark:text-white',
							e.toggled ? 'rotate-180' : 'rotate-0',
						],
						viewBox: '0 0 20 20',
					},
					[A],
					2
				)),
				n(
					a,
					{ name: 'scale' },
					{
						default: r(() => [
							e.toggled
								? (o(),
								  t('div', x, [
										(o(!0),
										t(
											i,
											null,
											l(
												e.lists,
												(r, n) => (
													o(),
													t('div', null, [
														e.currentDropdown == n && e.hover
															? (o(),
															  t(
																	w,
																	{
																		key: 0,
																		onToggleMenu: e.toggleMenu,
																		onChangeList: e.updateList,
																		onLink: e.openLink,
																		onChangeDemo:
																			s[2] ||
																			(s[2] = (t) => e.$emit('changeDemo', t)),
																		items: r,
																		id: n,
																	},
																	null,
																	8,
																	[
																		'onToggleMenu',
																		'onChangeList',
																		'onLink',
																		'items',
																		'id',
																	]
															  ))
															: d('', !0),
													])
												)
											),
											256
										)),
								  ]))
								: d('', !0),
						]),
						_: 1,
					}
				),
			],
			32
		)
	);
};
var y = e({
	name: 'App',
	components: { DropdownMenu: h },
	data: () => ({
		currentSection: 'home',
		darkMode: !1,
		sites: [
			{
				name: 'Demos',
				description: 'Random demos for using in projects!',
				redirect: 'demos',
			},
		],
		media: [
			{
				link: '/port_assets/github_1.9989ce2a.webp',
				href: 'https://github.com/querterdesu',
			},
			{
				link: '/port_assets/twitter_1.398b3faa.webp',
				href: 'https://twitter.com/querterwastaken',
			},
			{
				link:
					'data:image/webp;base64,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',
				href: 'https://www.youtube.com/channel/UCxbKCyK8PochT-OCwRByoGQ',
			},
			{
				link: '/port_assets/worldwide_1.9e98083c.webp',
				href: 'https://querterdesu.github.io',
			},
		],
		sections: {
			sections: [
				{ value: 'Home', clickEvent: 'changeDemo', clickParams: 'home' },
				{
					value: 'Projects',
					clickEvent: 'changeDemo',
					clickParams: 'projects',
				},
				{ value: 'Hobbies', clickEvent: 'changeDemo', clickParams: 'hobbies' },
				{ value: 'Media', clickEvent: 'changeDemo', clickParams: 'media' },
			],
		},
		port: [
			{
				name: 'About me',
				img: '/port_assets/banner-1.7b3ddd4a.webp',
				text:
					'I am a person who enjoys programming and playing video games. I mainly specialize in Python and JavaScript, I am also learning C++.',
			},
			{
				name: 'Custom-coded Discord server',
				img: '/port_assets/banner-2.adce4373.webp',
				text:
					'With the help of YAGPDB and my own discord bot, I have created one of the most sophisticated discord server systems ever!',
				link: 'https://discord.gg/ZbbMY9e',
			},
		],
	}),
	methods: {
		updateSection(e) {
			this.currentSection = e;
		},
	},
});
const b = {
		class: 'bg-gray-100 dark:bg-gray-900 min-h-screen transition duration-100',
	},
	f = { class: 'flex justify-center' },
	v = n(
		'h1',
		{
			class:
				'text-5xl font-bold justify-center text-center py-6 m-auto text-black dark:text-white absolute',
		},
		' Querter ',
		-1
	),
	k = { class: 'flex' },
	C = { key: 0, class: 'flex flex-col justify-center items-center' },
	E = {
		class:
			'mx-20 flex flex-col lg:flex-row justify-center items-center w-2/3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg my-10',
	},
	M = { class: 'mx-8 text-black dark:text-white' },
	D = { class: 'lg:text-2xl xl:text-5xl font-bold text-center lg:text-left' },
	I = {
		class:
			'lg:my-4 xl:my-6 2xl:my-8 lg:text-md xl:text-lg text-center lg:text-left mb-4',
	},
	j = {
		class: 'text-center lg:text-left flex justify-center lg:justify-start mb-6',
	},
	L = { key: 1 },
	B = n(
		'div',
		{ class: 'text-3xl text-center' },
		' Soon there will be projects added! ',
		-1
	),
	F = { key: 2 },
	S = n(
		'div',
		{ class: 'text-3xl text-center' },
		' Soon there will be hobbies added! ',
		-1
	),
	J = { key: 3, class: 'flex flex-row justify-center my-20 flex-wrap' };
y.render = function (e, r, a, g, m, u) {
	const p = c('DropdownMenu');
	return (
		o(),
		t(
			'div',
			{ class: e.darkMode ? 'dark' : '' },
			[
				n('div', b, [
					n('div', f, [
						v,
						n(
							'button',
							{
								class:
									'text-3xl w-16 h-16 ml-auto my-4 mx-4 bg-white dark:bg-gray-800 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl shadow-lg',
								onClick: r[1] || (r[1] = (t) => (e.darkMode = !e.darkMode)),
							},
							s(e.darkMode ? '🌑' : '☀️'),
							1
						),
					]),
					n('div', k, [
						n(
							p,
							{
								lists: e.sections,
								start: 'sections',
								onChangeDemo: e.updateSection,
							},
							null,
							8,
							['lists', 'onChangeDemo']
						),
					]),
					'home' == e.currentSection
						? (o(),
						  t('div', C, [
								(o(!0),
								t(
									i,
									null,
									l(
										e.port,
										(e) => (
											o(),
											t('div', E, [
												n(
													'img',
													{
														src: e.img,
														alt: e.name,
														width: '400',
														height: '500',
														class:
															'w-32 h-32 overflow-hidden lg:overflow-visible lg:h-96 rounded-full lg:w-96 lg:rounded-none lg:rounded-l-xl lg:m-0 my-4 mt-6',
													},
													null,
													8,
													['src', 'alt']
												),
												n('div', M, [
													n('h1', D, s(e.name), 1),
													n('p', I, s(e.text), 1),
													n('div', j, [
														e.link
															? (o(),
															  t(
																	'a',
																	{
																		key: 0,
																		href: e.link,
																		class:
																			'text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 font-bold',
																	},
																	'Link',
																	8,
																	['href']
															  ))
															: d('', !0),
													]),
												]),
											])
										)
									),
									256
								)),
						  ]))
						: d('', !0),
					'projects' == e.currentSection ? (o(), t('div', L, [B])) : d('', !0),
					'hobbies' == e.currentSection ? (o(), t('div', F, [S])) : d('', !0),
					'media' == e.currentSection
						? (o(),
						  t('div', J, [
								(o(!0),
								t(
									i,
									null,
									l(
										e.media,
										(e) => (
											o(),
											t(
												'a',
												{
													class:
														'mx-12 my-12 md:mx-6 md:my-0 flex-none bg-white dark:bg-gray-300 transition duration-100 rounded shadow-xl p-4',
													target: '_blank',
													ref: 'noopener noreferrer',
													href: e.href,
												},
												[
													n(
														'img',
														{
															alt: 'Icon for social media',
															src: e.link,
															width: '128',
															height: '128',
															class:
																'w-16 h-16 transform hover:scale-125 transition ease-linear duration-100',
														},
														null,
														8,
														['src']
													),
												],
												8,
												['href']
											)
										)
									),
									256
								)),
						  ]))
						: d('', !0),
				]),
			],
			2
		)
	);
};
g(y).mount('#app');
