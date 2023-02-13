<template>
	<form @submit.prevent="handleSubmit">
		<div class="mb-3">
			<input-text title="Task title" name="title" type="text" v-model="title" :errors="errors" />
		</div>
		<div class="mb-3">
			<input-text-area title="Task description" name="description" v-model="description" :errors="errors" />
		</div>
		<button-loading :loading="loading" :message="btnMessage" />
		<router-link type="button" class="btn btn-secondary ms-3" :to="{ name: 'tasks' }">Cancel</router-link>
	</form>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	import InputText from "../inputs/InputText.vue";
	import InputTextArea from "../inputs/InputTextArea.vue";
	import ButtonLoading from "../ButtonLoading.vue";

	export default {
		name: "TaskForm",
		props: {
			taskId: {
				type: String,
				required: false,
			},
		},
		components: { ButtonLoading, InputText, InputTextArea },
		data() {
			return {
				title: "",
				description: "",
				loading: false,
				errors: {},
			};
		},

		methods: {
			...mapActions({ createTask: "tasks/createTask", editTask: "tasks/editTask" }),

			async handleSubmit() {
				this.loading = true;
				const task = {
					title: this.title,
					description: this.description,
					completed: false,
				};

				try {
					if (this.taskId)
						await this.editTask({
							...task,
							_id: this.taskId,
						});
					else await this.createTask(task);
				} catch (err) {
					this.errors = err.errors;
					this.loading = false;
				}
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
