<template>
	<h2>{{ title }}</h2>
	<div>
		<p class="fs-5">
			Total tasks: <span class="fw-bold">{{ tasksToList.length }}</span>
		</p>
		<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
			<template v-for="task in tasksToList" :key="task.id">
				<task-card :task="task" />
			</template>
		</div>
	</div>
</template>

<script>
	import TaskCard from "./TaskCard.vue";

	export default {
		name: "TaskList",
		components: { TaskCard },
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
	};
</script>

<style></style>
