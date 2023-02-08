<template>
	<div class="container">
		<h1>{{ taskId ? "Edit Task" : "Add Task" }}</h1>
		<form @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label for="taskTitle" class="form-label">Task title</label>
				<input
					name="taskTitle"
					type="text"
					class="form-control"
					placeholder="Task title..."
					v-model="title"
					required
				/>
			</div>
			<div class="mb-3">
				<label for="taskTitle" class="form-label">Task description</label>
				<textarea class="form-control" placeholder="Task description..." v-model="description"></textarea>
			</div>
			<button-loading :loading="loading" :message="btnMessage" />
			<router-link type="button" class="btn btn-secondary ms-3" :to="{ name: 'tasks' }">Cancel</router-link>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	import ButtonLoading from "../ButtonLoading.vue";

	export default {
		name: "TaskForm",
		props: {
			taskId: {
				type: String,
				required: false,
			},
		},
		components: {
			ButtonLoading,
		},
		data() {
			return {
				title: "",
				description: "",
				loading: false,
			};
		},

		methods: {
			...mapActions({ createTask: "tasks/createTask", editTask: "tasks/editTask" }),

			handleSubmit() {
				this.loading = true;

				if (this.taskId) {
					this.editTask({
						id: this.taskId,
						title: this.title,
						description: this.description,
						completed: false,
					});
				} else {
					this.createTask({
						title: this.title,
						description: this.description,
						completed: false,
					});
				}

				this.title = "";
				this.description = "";
			},
		},

		computed: {
			...mapGetters({ getTask: "tasks/getTask" }),

			btnMessage() {
				return this.taskId ? "Edit Task" : "Add Task";
			},
		},

		mounted() {
			if (this.taskId) {
				const task = this.getTask(this.taskId);
				this.title = task.title;
				this.description = task.description;
			}
		},
	};
</script>

<style></style>
