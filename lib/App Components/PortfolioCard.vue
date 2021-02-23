<template>
	<div
		class="m-8 p-4 shadow-lg rounded-2xl w-4/6 h-4/6 md:w-2/6 md:h-2/6 xl:h-1/6 xl:w-1/6 flex flex-col justify-center align-middle bg-white dark:bg-gray-800"
	>
		<img
			class="w-24 h-24 rounded-full mx-auto"
			:src="image"
			width="128"
			height="128"
		/>
		<h1
			class="mx-auto mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100"
		>
			{{ person }}
		</h1>
		<h2 class="mx-auto mt-1 text-md italic text-gray-800 dark:text-gray-100">
			{{ job }}
		</h2>
		<p
			class="mx-auto mt-3 text-md justify-center text-center text-gray-800 dark:text-gray-100"
			v-if="quote"
		>
			{{ quote }}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PortfolioCard',
	props: {
		person: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		job: {
			type: String,
			required: true,
		},
		quote: {
			type: String,
			required: false,
		},
	},
});
</script>
