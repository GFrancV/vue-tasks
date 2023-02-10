<template>
	<div class="forms-container border">
		<h1>Edit Task</h1>
		<task-form :taskId="taskId" />
	</div>
</template>

<script>
	import TaskForm from "../components/tasks/TaskForm.vue";

	export default {
		name: "EditTaskView",
		components: { TaskForm },
		props: {
			taskId: {
				type: String,
				required: false,
			},
		},
	};
</script>

<style></style>
