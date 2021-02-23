<template>
	<div
		class="flex flex-col font-bold bg-white rounded-xl p-4 pr-6 text-xl dark:bg-gray-800 shadow-2xl"
	>
		<p class="mx-3 text-2xl select-none dark:text-gray-200">{{ title }}</p>
		<DropdownItem
			v-for="item in items"
			@click="
				$emit(`${item.clickEvent}`, item.clickParams);
				if (item.clickEvent != 'changeList') {
					$emit('toggleMenu');
				}
			"
			:properties="item"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownItem from './DropdownItem.vue';

export default defineComponent({
	name: 'DropdownList',
	components: {
		DropdownItem,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	computed: {
		title() {
			let new_arr = this.id.split('_');
			let res = [];
			for (const word of new_arr) {
				res.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
			}
			return res.join(' ');
		},
	},
});
</script>
