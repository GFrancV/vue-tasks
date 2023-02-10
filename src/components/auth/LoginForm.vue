<template>
	<form @submit.prevent="handleSubmit" class="needs-validation">
		<div class="mb-3">
			<input-text title="Email" name="email" type="email" v-model="email" :errors="errors" />
		</div>
		<div class="mb-3">
			<input-text title="Password" name="password" type="password" v-model="password" :errors="errors" />
		</div>

		<button-loading :loading="loading" :message="'Login'" />
	</form>
</template>

<script>
	import { mapActions } from "vuex";

	import InputText from "../inputs/InputText.vue";
	import ButtonLoading from "../ButtonLoading.vue";

	export default {
		name: "LoginForm",
		components: { InputText, ButtonLoading },
		data() {
			return {
				email: "",
				password: "",
				loading: false,
				errors: {},
			};
		},

		methods: {
			...mapActions({ login: "auth/login" }),

			handleSubmit() {
				this.loading = true;
				const userCredentials = { email: this.email, password: this.password };

				this.login(userCredentials).catch(err => {
					this.errors = err.errors;
					this.loading = false;
				});
			},
		},
	};
</script>

<style></style>
