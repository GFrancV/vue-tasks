<template>
	<div class="d-flex justify-content-between">
		<h2>Task List</h2>
		<router-link :to="{ name: 'newTask' }" class="btn btn-primary pt-2"> Add task </router-link>
	</div>
	<div>
		<p class="fs-5">
			Total tasks: <span class="fw-bold">{{ tasks.length }}</span>
		</p>
		<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
			<template v-for="task in tasks" :key="task.id">
				<task-card :task="task" />
			</template>
		</div>
	</div>
</template>

<script>
	import TaskCard from "./TaskCard.vue";
	import { mapGetters } from "vuex";
	import api from "../../api";

	export default {
		components: { TaskCard },

		computed: {
			...mapGetters("tasks", { tasks: "getTasks" }),
		},
	};
</script>

<style></style>
