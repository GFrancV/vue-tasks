<template>
	<header>
		<nav class="navbar navbar-expand bg-secondary-subtle border-bottom">
			<div class="container">
				<router-link class="navbar-brand" :to="{ name: 'home' }">Task App</router-link>
				<ul class="navbar-nav d-flex">
					<li class="nav-item">
						<router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
					</li>
					<li v-if="logged" class="nav-item">
						<router-link :to="{ name: 'tasks' }" class="nav-link">Tasks</router-link>
					</li>
				</ul>
				<div v-if="!logged">
					<router-link class="btn btn-outline-success" :to="{ name: 'login' }">Login</router-link>
				</div>
				<div v-else>
					<div class="dropdown-center">
						<a class="dropdown-toggle pe-auto" data-bs-toggle="dropdown" aria-expanded="false" href="#">
							{{ user.name }}
						</a>
						<ul class="dropdown-menu dropdown-menu-dark">
							<li><a class="dropdown-item" @click.prevent="handleLogout">Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Header",

		methods: {
			...mapActions({ logout: "auth/logout" }),

			handleLogout() {
				this.logout();
			},
		},

		computed: {
			...mapGetters({ logged: "auth/getLogged", user: "auth/getUser" }),
		},
	};
</script>

<style></style>
