<template>
	<div class="col">
		<div class="border rounded p-3">
			<div class="d-flex justigy-content-between">
				<h3 :class="{ 'text-decoration-line-through': task.completed }">
					{{ task.title }}
				</h3>
				<input
					type="checkbox"
					v-model="task.completed"
					@click="handleComplete"
					class="mx-auto"
					:checked="task.completed"
				/>
			</div>
			<p :class="{ 'text-decoration-line-through': task.completed }">
				{{ task.description }}
			</p>
			<div class="btn-group" role="group" aria-label="Task actions">
				<router-link
					v-if="!task.completed"
					:to="{ name: 'editTask', params: { taskId: task.id } }"
					class="btn btn-primary"
				>
					Edit
				</router-link>
				<button @click="handleDelete" class="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>

	<!-- <div class="card" aria-hidden="true">
		<div class="card-body">
			<h3 class="card-title placeholder col-6">
				<span class="placeholder col-6"></span>
			</h3>
			<span class="ms-5 placeholder col-1"></span>
			<p class="card-text placeholder-glow">
				<span class="placeholder col-7"></span>
			</p>
			<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-2"></a>
			<a href="#" tabindex="-1" class="btn btn-danger disabled placeholder col-2"></a>
		</div>
	</div> -->
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "TaskCard",
		props: {
			task: {
				type: Object,
				required: true,
			},
		},

		methods: {
			...mapActions({ deleteTask: "tasks/deleteTask", completeTask: "tasks/completeTask" }),

			handleDelete() {
				if (confirm("Are you sure?")) {
					this.deleteTask(this.task);
				}
			},

			handleComplete() {
				this.completeTask({
					...this.task,
					completed: !this.task.completed,
				});
			},
		},
	};
</script>

<style></style>
