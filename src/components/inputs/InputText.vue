<template>
	<label class="form-label" :for="`${name}Input`">{{ title }}</label>
	<input
		:type="type"
		class="form-control"
		:class="{ 'is-invalid': haveErrors !== null }"
		:name="`${name}Input`"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		required
	/>
	<div v-if="haveErrors !== null" class="invalid-feedback">{{ haveErrors }}</div>
</template>

<script>
	export default {
		name: "InputText",
		props: {
			title: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				default: "text",
			},
			modelValue: {
				type: String,
				required: true,
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
