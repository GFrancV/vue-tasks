<template>
	<Header />
	<main class="py-5">
		<RouterView />
	</main>
	<Footer />
</template>

<script>
	import Header from "./layout/Header.vue";
	import Footer from "./layout/Footer.vue";

	export default {
		name: "App",
		components: { Header, Footer },
	};
</script>

<style scoped></style>
