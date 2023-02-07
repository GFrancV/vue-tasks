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
				/>
			</div>
			<div class="mb-3">
				<label for="taskTitle" class="form-label">Task description</label>
				<textarea class="form-control" placeholder="Task description..." v-model="description"></textarea>
			</div>
			<button type="submit" class="btn btn-primary me-3">{{ taskId ? "Edit Task" : "Add Task" }}</button>
			<router-link type="button" class="btn btn-secondary" :to="{ name: 'home' }">Cancel</router-link>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import { v4 as uuid } from "uuid";

	export default {
		name: "TaskForm",
		props: {
			taskId: {
				type: String,
				required: false,
			},
		},
		data() {
			return {
				title: "",
				description: "",
			};
		},

		methods: {
			...mapActions({ createTask: "tasks/createTask", editTask: "tasks/editTask" }),

			handleSubmit() {
				if (this.taskId) {
					this.editTask({
						id: this.taskId,
						title: this.title,
						description: this.description,
						completed: false,
					});
				} else {
					this.createTask({
						id: uuid(),
						title: this.title,
						description: this.description,
						completed: false,
					});
				}

				this.title = "";
				this.description = "";

				this.$router.push("/");
			},
		},

		computed: {
			...mapGetters({ getTask: "tasks/getTask" }),
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
