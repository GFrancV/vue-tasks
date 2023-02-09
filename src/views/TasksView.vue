<template>
	<div class="container">
		<div class="d-flex justify-content-between mb-5">
			<h1>Tasks</h1>
			<router-link :to="{ name: 'newTask' }" class="btn btn-primary pt-2"> Add task </router-link>
		</div>

		<task-list :title="'Tasks to do'" :tasksToList="uncompletedTasks" />

		<div v-if="completedTasks.length > 0" class="accordion accordion-flush mt-5" id="accordionFlushExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="flush-headingOne">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOne"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						Completed Tasks
					</button>
				</h2>
				<div
					id="flush-collapseOne"
					class="accordion-collapse collapse"
					aria-labelledby="flush-headingOne"
					data-bs-parent="#accordionFlushExample"
				>
					<div class="accordion-body">
						<task-list :title="'Completed Tasks'" :tasksToList="completedTasks" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TaskList from "../components/tasks/TaskList.vue";

	export default {
		name: "TasksView",
		components: { TaskList },

		computed: {
			...mapGetters({ uncompletedTasks: "tasks/getUncompletedTasks" }),
			...mapGetters({ completedTasks: "tasks/getCompletedTasks" }),
		},
	};
</script>

<style></style>
