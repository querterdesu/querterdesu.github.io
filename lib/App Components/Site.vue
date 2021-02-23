<template>
	<a
		:href="properties.redirect"
		class="border-gray-100 border-2 rounded mx-6 p-4 my-6 hover:border-red-300 w-full md:w-3/6 lg:w-2/6 xl:w-2/8"
	>
		<h1 class="text-red-500 font-bold text-xl">{{ properties.name }}</h1>
		<p>{{ properties.description }}</p>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Site',
	props: {
		properties: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
});
</script>
