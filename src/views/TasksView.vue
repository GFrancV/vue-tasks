<template>
	<div class="container">
		<h1>Task</h1>
		<task-list />
	</div>
</template>

<script>
	import TaskList from "../components/tasks/TaskList.vue";
	export default {
		components: { TaskList },
	};
</script>

<style></style>
