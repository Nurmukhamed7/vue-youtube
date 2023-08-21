<template>
	<h1 class="heading-1">Typography (это Typography.vue)</h1>
	<h2 class="heading-1">heading 1</h2>
	<h2 class="heading-2">heading 2</h2>
	<h2 class="heading-3">heading 3</h2>
</template>

<script setup></script>

<style lang="scss">
// убрали scoped
.heading {
	&-1 {
		font-size: 34px;
		margin: 20px 0;
		font-weight: 300;
	}
	&-2 {
		font-size: 22px;
		margin: 20px 0;
		font-weight: 300;
	}

	&-3 {
		font-size: 17px;
		margin: 20px 0;
		font-weight: 300;
	}
}
</style>
