<template>
	<div class="col">
		<div class="card p-3" aria-hidden="true">
			<div class="card-body">
				<h5 class="card-title placeholder-glow">
					<span class="placeholder col-8"></span>
					<span class="placeholder col-1 ms-5"></span>
				</h5>
				<p class="card-text placeholder-glow">
					<span class="placeholder col-4"></span>
				</p>
				<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-3"></a>
				<a href="#" tabindex="-1" class="btn btn-danger disabled placeholder col-3"></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TaskCardPlaceholder",
	};
</script>

<style></style>
