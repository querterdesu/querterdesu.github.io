<template>
	<div
		class="flex flex-col m-2"
		@mouseenter="hover = true"
		@mouseleave="
			hover = false;
			toggled = false;
		"
	>
		<svg
			@click="toggleMenu"
			class="w-16 z-10 h-16 bg-white shadow-xl rounded-3xl p-4 transform scale-75 transition duration-200 cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 img-white fill-current text-gray-900 dark:text-white"
			:class="toggled ? 'rotate-180' : 'rotate-0'"
			viewBox="0 0 20 20"
		>
			<path
				d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
			/>
		</svg>
		<transition name="scale">
			<div
				v-if="toggled"
				class="absolute mt-16 w-9/12 md:w-6/12 lg:w-3/12 xl:w-2/12 z-20"
			>
				<div v-for="(list, listname) in lists">
					<DropdownList
						v-if="currentDropdown == listname && hover"
						@toggleMenu="toggleMenu"
						@changeList="updateList"
						@link="openLink"
						@changeDemo="$emit('changeDemo', $event)"
						:items="list"
						:id="listname"
					/>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownList from './DropdownList.vue';

export default defineComponent({
	name: 'DropdownMenu',
	data() {
		return {
			toggled: false,
			currentList: '',
			hover: false,
		};
	},
	props: {
		lists: {
			type: Object,
			required: true,
		},
		start: {
			type: String,
			required: true,
		},
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
		updateList(newList) {
			this.currentList = newList;
		},
		openLink(link) {
			window.open(link);
		},
	},
	components: {
		DropdownList,
	},
});
</script>
