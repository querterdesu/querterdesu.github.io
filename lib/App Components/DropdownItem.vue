<template>
	<transition name="fade">
		<div
			class="flex flex-row py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl mx-1 px-2 cursor-pointer dark:text-gray-200 transform transition"
			@mouseover="hover = true"
			@mouseleave="hover = false"
		>
			<button
				class="focus:outline-none select-none transform transition"
				:class="hover ? 'opacity-100' : 'opacity-0'"
			>
				{{ '>' }}
			</button>
			<button
				class="focus:outline-none select-none transform transition"
				:class="hover ? 'translate-x-3' : ''"
			>
				{{ properties.value }}
			</button>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DropdownItem',
	props: {
		properties: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			hover: false,
		};
	},
});
</script>
