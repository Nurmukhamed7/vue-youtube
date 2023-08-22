<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue'
import { ref } from 'vue'

const checkboxActive = ref(true)
</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h2 class="heading-2">Checkbox Active</h2>
	<div class="line">
		<Checkbox
			label="This is Label"
			id="CheckboxActive"
			name="CheckboxActive"
			value="I like it"
			v-model:checked="checkboxActive"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
