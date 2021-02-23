<template>
	<div>
		<ul></ul>
		<h1></h1>
		<h2></h2>
		<p></p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MultiPageCards',
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
