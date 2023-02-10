<template>
	<div class="forms-container border">
		<h1>Login</h1>
		<login-form class="mt-4" />
		<p class="mt-4">
			You already don't have account? <router-link :to="{ name: 'register' }">Register now</router-link>
		</p>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import LoginForm from "../components/auth/LoginForm.vue";

	export default {
		name: "LoginView",
		components: {
			LoginForm,
		},
	};
</script>

<style></style>
