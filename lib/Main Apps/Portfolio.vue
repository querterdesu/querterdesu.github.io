<template>
	<div :class="darkMode ? 'dark' : ''">
		<div
			class="bg-gray-100 dark:bg-gray-900 min-h-screen transition duration-100"
		>
			<div class="flex justify-center">
				<h1
					class="text-5xl font-bold justify-center text-center py-6 m-auto text-black dark:text-white absolute"
				>
					Querter
				</h1>
				<button
					class="text-3xl w-16 h-16 ml-auto my-4 mx-4 bg-white dark:bg-gray-800 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl shadow-lg"
					@click="darkMode = !darkMode"
				>
					{{ darkMode ? '🌑' : '☀️' }}
				</button>
			</div>
			<div class="flex">
				<DropdownMenu
					:lists="sections"
					start="sections"
					@changeDemo="updateSection"
				/>
			</div>
			<div
				class="flex flex-col justify-center items-center"
				v-if="currentSection == 'home'"
			>
				<div
					class="mx-20 flex flex-col lg:flex-row justify-center items-center w-2/3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg my-10"
					v-for="card in port"
				>
					<img
						:src="card.img"
						class="w-32 h-32 overflow-hidden lg:overflow-visible lg:h-96 rounded-full lg:w-96 lg:rounded-none lg:rounded-l-xl lg:m-0 my-4 mt-6"
					/>
					<div class="mx-8 text-black dark:text-white">
						<h1
							class="lg:text-2xl xl:text-5xl font-bold text-center lg:text-left"
						>
							{{ card.name }}
						</h1>
						<p
							class="lg:my-4 xl:my-6 2xl:my-8 lg:text-md xl:text-lg text-center lg:text-left mb-4"
						>
							{{ card.text }}
						</p>
						<div
							class="text-center lg:text-left flex justify-center lg:justify-start mb-6"
						>
							<a
								v-if="card.link"
								:href="card.link"
								class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 font-bold"
								>Link</a
							>
						</div>
					</div>
				</div>
			</div>
			<div v-if="currentSection == 'projects'">
				<div class="text-3xl text-center">
					Soon there will be projects added!
				</div>
			</div>
			<div v-if="currentSection == 'hobbies'">
				<div class="text-3xl text-center">
					Soon there will be hobbies added!
				</div>
			</div>
			<div
				v-if="currentSection == 'media'"
				class="flex flex-row justify-center my-20 flex-wrap"
			>
				<a
					v-for="curr in media"
					class="mx-12 my-12 md:mx-6 md:my-0 flex-none bg-white dark:bg-gray-300 transition duration-100 rounded shadow-xl p-4"
					target="_blank"
					ref="noopener noreferrer"
					:href="curr.href"
				>
					<img
						:src="curr.link"
						class="w-16 h-16 transform hover:scale-125 transition ease-linear duration-100"
					/>
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownMenu from './components/DropdownMenu.vue';

export default defineComponent({
	name: 'App',
	components: {
		DropdownMenu,
	},
	data() {
		return {
			currentSection: 'home',
			darkMode: false,
			sites: [
				{
					name: 'Demos',
					description: 'Random demos for using in projects!',
					redirect: 'demos',
				},
			],
			media: [
				{
					link:
						'https://cdn.discordapp.com/attachments/682980706644656151/813776851884703774/github.png',
					href: 'https://github.com/querterdesu',
				},
				{
					link:
						'https://cdn.discordapp.com/attachments/682980706644656151/813776848978444328/twitter.png',
					href: 'https://twitter.com/querterwastaken',
				},
				{
					link:
						'https://cdn.discordapp.com/attachments/682980706644656151/813776849884413952/youtube.png',
					href: 'https://www.youtube.com/channel/UCxbKCyK8PochT-OCwRByoGQ',
				},
				{
					link:
						'https://cdn.discordapp.com/attachments/682980706644656151/813776854535110696/worldwide.png',
					href: 'https://querterdesu.github.io',
				},
			],
			sections: {
				sections: [
					{
						value: 'Home',
						clickEvent: 'changeDemo',
						clickParams: 'home',
					},
					{
						value: 'Projects',
						clickEvent: 'changeDemo',
						clickParams: 'projects',
					},
					{
						value: 'Hobbies',
						clickEvent: 'changeDemo',
						clickParams: 'hobbies',
					},
					{
						value: 'Media',
						clickEvent: 'changeDemo',
						clickParams: 'media',
					},
				],
			},
			port: [
				{
					name: 'About me',
					img:
						'https://cdn.discordapp.com/attachments/682980706644656151/813731698838601809/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg',
					text:
						'I am a person who enjoys programming and playing video games. I mainly specialize in Python and JavaScript, I am also learning C++.',
				},
				{
					name: 'Custom-coded Discord server',
					img:
						'https://cdn.discordapp.com/attachments/682980706644656151/813759729029480458/marc-noorman-vbmo65xNC_Y-unsplash.jpg',
					text:
						'With the help of YAGPDB and my own discord bot, I have created one of the most sophisticated discord server systems ever!',
					link: 'https://discord.gg/ZbbMY9e',
				},
			],
		};
	},
	methods: {
		updateSection(newSection) {
			this.currentSection = newSection;
		},
	},
});
</script>
