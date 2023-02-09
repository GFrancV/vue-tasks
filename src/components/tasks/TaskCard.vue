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
					:true-value="1"
					:false-value="0"
					@click="handleComplete"
					class="mx-auto"
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
				<button-loading @click="handleDelete" :message="'Delete'" :loading="loading" :style="'btn-danger'" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import ButtonLoading from "../ButtonLoading.vue";

	export default {
		components: { ButtonLoading },
		name: "TaskCard",
		props: {
			task: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				loading: false,
			};
		},

		methods: {
			...mapActions({ deleteTask: "tasks/deleteTask", completeTask: "tasks/completeTask" }),

			handleDelete() {
				if (confirm("Are you sure?")) {
					this.loading = true;
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
