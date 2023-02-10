<template>
	<div class="forms-container border">
		<h1>Add Task</h1>
		<task-form />
	</div>
</template>

<script>
	import TaskForm from "../components/tasks/TaskForm.vue";

	export default {
		name: "AddTaskView",
		components: { TaskForm },
	};
</script>

<style></style>
