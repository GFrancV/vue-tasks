<template>
	<div class="container">
		<h1>Home</h1>
		<p>Simple task SPA .</p>
		<task-list v-if="logged" :tasksToList="tasks" />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TaskList from "../components/tasks/TaskList.vue";

	export default {
		components: { TaskList },

		computed: {
			...mapGetters({ logged: "auth/getLogged" }),
			...mapGetters({ tasks: "tasks/getUncompletedTasks" }),
		},
	};
</script>

<style></style>
