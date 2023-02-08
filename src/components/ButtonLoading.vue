<template>
	<button type="submit" class="btn" :class="style" :disabled="loading" v-html="btnMessage"></button>
</template>

<script>
	export default {
		name: "ButtonLoading",
		props: {
			style: {
				type: String,
				default: "btn-primary",
			},
			message: {
				tpye: String,
				required: true,
			},
			loading: {
				type: Boolean,
				required: true,
			},
		},

		computed: {
			btnMessage() {
				return this.loading
					? `<span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${this.message}<span v-if="loading">...</span>`
					: this.message;
			},
		},
	};
</script>

<style></style>
