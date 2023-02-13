<template>
	<h2>{{ title }}</h2>
	<task-list-placeholder v-if="tasksLoading" />
	<template v-else>
		<p class="fs-5">
			Total tasks: <span class="fw-bold">{{ tasksToList.length }}</span>
		</p>
		<div v-if="tasksToList.length > 0" class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
			<template v-for="task in tasksToList" :key="task['_id']">
				<task-card :task="task" />
			</template>
		</div>
		<div v-else class="text-center">
			<p class="fs-1 text-muted">You don't have tasks yet!</p>
		</div> </template
	>1
</template>

<script>
	import { mapGetters } from "vuex";

	import TaskListPlaceholder from "./TaskListPlaceholder.vue";
	import TaskCard from "./TaskCard.vue";

	export default {
		name: "TaskList",
		components: { TaskCard, TaskListPlaceholder },
		props: {
			title: {
				type: String,
				default: "Task List",
			},
			tasksToList: {
				type: Array,
				required: true,
			},
		},

		computed: {
			...mapGetters({ tasksLoading: "tasks/tasksLoading" }),
		},
	};
</script>

<style></style>
