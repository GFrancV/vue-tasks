<template>
	<div class="forms-container border">
		<h1>Login</h1>
		<login-form class="mt-4" />
	</div>
</template>

<script>
	import LoginForm from "../components/LoginForm.vue";

	export default {
		name: "LoginView",
		components: {
			LoginForm,
		},
	};
</script>

<style></style>
