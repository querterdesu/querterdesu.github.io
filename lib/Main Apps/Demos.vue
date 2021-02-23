<template>
	<div :class="darkMode ? 'dark' : ''">
		<div
			class="min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-100"
		>
			<Header
				currentDemo="login-form"
				:demolist="demolist"
				:darkMode="darkMode"
				@toggleDarkMode="toggleDarkMode"
			/>
			<DropdownMenu :lists="demolist" start="demos" @changeDemo="updateDemo" />
			<LoginForm v-if="demo == 'login-form'" />
			<PortfolioCards :cards="cards" v-if="demo == 'portfolio-cards'" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PortfolioCards from './components/PortfolioCards.vue';
import LoginForm from './components/LoginForm.vue';
import Header from './components/Header.vue';
import DropdownMenu from './components/DropdownMenu.vue';

export default defineComponent({
	name: 'App',
	components: {
		Header,
		LoginForm,
		PortfolioCards,
		DropdownMenu,
	},
	data() {
		return {
			darkMode: true,
			demo: 'login-form',
			demolist: {
				demos: [
					{
						value: 'Login form demo',
						clickEvent: 'changeDemo',
						clickParams: 'login-form',
					},
					{
						value: 'Portfolio cards demo',
						clickEvent: 'changeDemo',
						clickParams: 'portfolio-cards',
					},
					{
						value: 'Multi-page cards demo',
						clickEvent: 'changeDemo',
						clickParams: 'multi-page-cards',
					},
				],
			},
			cards: [
				{
					person: 'Pog',
					image: 'https://cdn.discordapp.com/emojis/689177828251533312.png?v=1',
					job: 'Yes',
					quote: 'Poggers pog poggers pog!',
				},
				{
					person: 'Pog',
					image: 'https://cdn.discordapp.com/emojis/689177828251533312.png?v=1',
					job: 'Yes',
					quote: 'Poggers pog poggers pog!',
				},
				{
					person: 'Pog',
					image: 'https://cdn.discordapp.com/emojis/689177828251533312.png?v=1',
					job: 'Yes',
					quote: 'Poggers pog poggers pog!',
				},
				{
					person: 'Pog',
					image: 'https://cdn.discordapp.com/emojis/689177828251533312.png?v=1',
					job: 'Yes',
					quote: 'Poggers pog poggers pog!',
				},
			],
		};
	},
	methods: {
		updateDemo(newDemo: String) {
			this.demo = newDemo;
		},
		toggleDarkMode() {
			this.darkMode = !this.darkMode;
		},
	},
});
</script>
