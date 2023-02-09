<template>
	<form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
		<div class="mb-3">
			<label class="form-label" for="emailInput">Email</label>
			<input
				type="email"
				class="form-control"
				:class="{ 'is-invalid': isValid('email') }"
				id="emailInput"
				name="email"
				v-model="email"
				required
			/>
			<div class="valid-feedback">Looks good!</div>
			<div class="invalid-feedback">Please choose a username.</div>
		</div>
		<div class="mb-3">
			<label class="form-label" for="password">Password</label>
			<input
				type="password"
				class="form-control"
				:class="{ 'is-invalid': isValid('password') }"
				name="password"
				v-model="password"
				required
			/>
			<div class="invalid-feedback">Wrong password.</div>
		</div>
		<button-loading :loading="loading" :message="'Login'" />
	</form>
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
				errors: [],
			};
		},

		methods: {
			...mapActions({ login: "auth/login" }),

			handleSubmit() {
				this.loading = true;

				this.login({ email: this.email, password: this.password }).catch(err => {
					this.loading = false;

					this.errors = [...Object.keys(err.errors)];
				});
			},

			isValid(form) {
				return this.errors.find(error => error == form);
			},
		},
	};
</script>

<style></style>
