<template>
	<div
		class="flex md:justify-start flex-col md:flex-row items-center justify-center"
	>
		<PortfolioCard
			v-for="card in cards"
			:key="card.person"
			:person="card.person"
			:image="card.image"
			:job="card.job"
			:quote="card.quote || ''"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PortfolioCard from './PortfolioCard.vue';

export default defineComponent({
	name: 'PortfolioCards',
	components: {
		PortfolioCard,
	},
	props: {
		cards: {
			type: Array,
			required: true,
		},
	},
});
</script>
