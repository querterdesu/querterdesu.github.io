<template>
	<form
		class="flex justify-center h-full m-20 my-40 sm:m-40 text-3xl align-middle flex-col p-1"
	>
		<div class="flex flex-row align-middle mb-8">
			<input
				placeholder="Email"
				type="email"
				name="email"
				v-bind="email"
				class="text-lg md:text-2xl lg:text-3xl p-4 w-full md:w-4/6 xl:w-2/6 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none z-0 transition dark:bg-gray-800 dark:text-gray-100 duration-100"
			/>
			<label for="email" class="opacity-0">Email</label>
		</div>
		<div class="flex flex-row align-middle mb-8">
			<input
				placeholder="Password"
				name="password"
				:type="pwdHidden ? 'password' : 'text'"
				class="text-lg md:text-2xl lg:text-3xl p-4 w-full md:w-4/6 xl:w-2/6 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none z-0 transition duration-100 dark:bg-gray-800 dark:text-gray-100"
			/>
			<div class="flex flex-col justify-center -ml-16 z-10">
				<button
					class="p-3 text-xl focus:outline-none rounded-xl"
					@click.prevent="pwdHidden = !pwdHidden"
				>
					{{ pwdHidden ? '🙈️' : '👁️' }}
				</button>
			</div>
			<label for="password" class="opacity-0">Password</label>
		</div>
		<button
			class="text-lg md:text-2xl lg:text-3xl p-4 px-7 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-300 hover:to-pink-300 hover:text-black rounded-xl shadow-lg text-white font-semibold w-3/6 md:w-2/6 xl:w-1/6 transition duration-200"
		>
			Sign in
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LoginForm',
	data() {
		return {
			pwdHidden: true,
			email: '',
		};
	},
});
</script>
