<template>
	<form @submit.prevent="handleRegister" class="needs-validation">
		<div class="mb-3">
			<input-text title="Email" name="email" type="email" v-model="email" :errors="errors" />
		</div>
		<div class="mb-3">
			<input-text title="Name" name="name" type="text" v-model="name" :errors="errors" />
		</div>
		<div class="mb-3">
			<input-text title="Password" name="password" type="password" v-model="password" :errors="errors" />
		</div>
		<div class="mb-3">
			<input-text
				title="Password Confirmation"
				name="password_confirmation"
				type="password"
				v-model="passwordConfirmation"
				:errors="errors"
			/>
		</div>

		<button-loading message="Register" :loading="loading" />
	</form>
</template>

<script>
	import ButtonLoading from "../ButtonLoading.vue";
	import InputText from "../inputs/InputText.vue";

	import { mapActions } from "vuex";

	export default {
		name: "RegisterForm",
		components: { InputText, ButtonLoading },
		data() {
			return {
				email: "",
				name: "",
				password: "",
				passwordConfirmation: "",
				loading: false,
				errors: {},
			};
		},

		methods: {
			...mapActions({ register: "auth/register" }),

			handleRegister() {
				this.loading = true;
				const userInformation = {
					email: this.email,
					name: this.name,
					password: this.password,
					password_confirmation: this.passwordConfirmation,
				};

				this.register(userInformation).catch(err => {
					this.errors = err.errors;
					this.loading = false;
				});
			},
		},
	};
</script>

<style></style>
