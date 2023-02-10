<template>
	<label class="form-label" :for="`${name}Input`">{{ title }}</label>
	<textarea
		class="form-control"
		:class="{ 'is-invalid': haveErrors !== null }"
		:name="`${name}Input`"
		:value="modelValue || ''"
		@input="$emit('update:modelValue', $event.target.value)"
		:required="required"
	></textarea>
	<div v-if="haveErrors !== null" class="invalid-feedback">{{ haveErrors }}</div>
</template>

<script>
	export default {
		name: "InputTextArea",
		props: {
			title: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			modelValue: {
				type: String,
				default: "",
			},
			required: {
				tpye: Boolean,
				default: false,
			},
			errors: {
				type: Object,
				default: {},
			},
		},
		emits: ["update:modelValue"],

		computed: {
			haveErrors() {
				return this.errors[this.name] ? this.errors[this.name][0] : null;
			},
		},
	};
</script>

<style></style>
