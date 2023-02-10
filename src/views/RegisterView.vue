<template>
	<div class="forms-container border">
		<h1>Register</h1>
		<register-form />
	</div>
</template>

<script>
	import RegisterForm from "../components/auth/RegisterForm.vue";

	export default {
		name: "RegisterView",
		components: {
			RegisterForm,
		},
	};
</script>

<style></style>
