<template>
	<div class="container">
		<h1>Login</h1>
		<form @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label class="form-label" for="email">Email</label>
				<input type="email" class="form-control" name="email" v-model="email" />
			</div>
			<div class="mb-3">
				<label class="form-label" for="password">Password</label>
				<input type="password" class="form-control" name="password" v-model="password" />
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import api from "../api";

	export default {
		name: "LoginForm",
		data() {
			return {
				email: "",
				password: "",
			};
		},

		methods: {
			...mapActions({ login: "auth/login" }),

			handleSubmit() {
				this.login({ email: this.email, password: this.password });
			},
		},
	};
</script>

<style></style>
