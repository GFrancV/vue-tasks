<template>
	<div class="container">
		<h1>Home</h1>
		<p>Simple task SPA .</p>
		<template v-if="logged">
			<task-form class="mb-5" />
			<task-list :tasksToList="tasks" />
		</template>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TaskForm from "../components/tasks/TaskForm.vue";
	import TaskList from "../components/tasks/TaskList.vue";

	export default {
		name: "HomeView",
		components: { TaskList, TaskForm },

		computed: {
			...mapGetters({ logged: "auth/getLogged" }),
			...mapGetters({ tasks: "tasks/getUncompletedTasks" }),
		},
	};
</script>

<style></style>
