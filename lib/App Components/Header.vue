<template>
	<div
		class="flex justify-center text-center p-8 text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-white align-middle"
	>
		<h1 class="flex-grow align-middle select-none">Demos</h1>
		<button
			@click="$emit('toggle-dark-mode')"
			class="text-4xl focus:outline-none hover:bg-purple-500 bg-purple-600 align-middle text-center rounded-xl h-16 w-16 select-none"
		>
			{{ darkMode ? '🌑' : '☀️' }}
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Header',
	props: {
		currentDemo: {
			type: String,
			required: true,
		},
		demolist: {
			type: Object,
			required: true,
		},
		darkMode: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		titleText() {
			for (const demo of this.demolist.demos) {
				if (demo.clickParams === this.currentDemo) {
					return demo.value;
				}
			}
		},
	},
});
</script>
