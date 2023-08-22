<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue'
import { ref } from 'vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)
</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h2 class="heading-2">Checkbox Active</h2>
	<div class="line">
		<Checkbox
			label="Checkbox Active"
			id="CheckboxActive"
			name="CheckboxActive"
			value="I like it"
			v-model:checked="checkboxActive"
		/>
	</div>
	<h2 class="heading-2">Checkbox Disabled</h2>
	<div class="line">
		<Checkbox
			label="Checkbox Disabled"
			id="CheckboxDisabled"
			name="CheckboxDisabled"
			value="I like it"
			:disabled="checkboxDisabled"
			v-model:checked="checkboxDisabledChecked"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
