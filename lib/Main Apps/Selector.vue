<template>
	<div>
		<h1 class="text-center text-4xl py-6 font-bold">Querter's Site Selector</h1>
	</div>
	<div v-for="site in sites" :key="site.name" class="flex">
		<Site :properties="site" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Site from './components/Site.vue';

export default defineComponent({
	name: 'App',
	components: {
		Site,
	},
	data() {
		return {
			sites: [
				{
					name: 'Portfolio',
					description: 'Everything about me. (WIP)',
					redirect: 'portfolio',
				},
				{
					name: 'Demos',
					description: 'Random demos for using in projects!',
					redirect: 'demos',
				},
			],
		};
	},
});
</script>
