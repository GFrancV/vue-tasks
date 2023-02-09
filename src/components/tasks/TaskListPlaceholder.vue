<template>
	<p class="card-text placeholder-glow">
		<span class="placeholder col-2"></span>
	</p>
	<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
		<template v-for="n in 6" :key="n">
			<task-card-placeholder />
		</template>
	</div>
</template>

<script>
	import TaskCardPlaceholder from "./TaskCardPlaceholder.vue";

	export default {
		name: "TaskListPlaceholder",
		components: { TaskCardPlaceholder },
	};
</script>

<style></style>
