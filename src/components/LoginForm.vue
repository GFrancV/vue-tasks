<template>
	<div class="container">
		<h1>Login</h1>
		<form @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label class="form-label" for="email">Email</label>
				<input type="email" class="form-control" name="email" v-model="email" required />
			</div>
			<div class="mb-3">
				<label class="form-label" for="password">Password</label>
				<input type="password" class="form-control" name="password" v-model="password" required />
			</div>
			<button-loading :loading="loading" :message="'Login'" />
		</form>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

	import ButtonLoading from "./ButtonLoading.vue";

	export default {
		name: "LoginForm",
		components: {
			ButtonLoading,
		},
		data() {
			return {
				email: "",
				password: "",
				loading: false,
			};
		},

		methods: {
			...mapActions({ login: "auth/login" }),

			handleSubmit() {
				this.loading = true;
				this.login({ email: this.email, password: this.password });
			},
		},
	};
</script>

<style></style>
