<script setup>
import Input from '@/components/Input.vue'
import useVuelidate from '@vuelidate/core'
import {
	email,
	helpers,
	maxLength,
	minLength,
	numeric,
} from '@vuelidate/validators'
import { computed, ref } from 'vue'

const nameField = ref('')
const emailField = ref('')
const luckyFiled = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')

const rules = computed(() => ({
	nameField: {
		minLength: helpers.withMessage('Минимальная длина 3 символа', minLength(3)),
	},
	emailField: {
		email: helpers.withMessage('Некорректный email', email),
	},
	luckyFiled: {
		maxLength: helpers.withMessage(
			'Максимальная длина 2 символа',
			maxLength(2)
		),
		numeric: helpers.withMessage('Вы можете ввести только числа', numeric),
	},
}))

// тут используем rules и какие правила, например nameField
const v = useVuelidate(rules, { nameField, emailField, luckyFiled })
</script>

<template>
	<h1 class="heading-1">Inputs from Input.vue (views)</h1>

	<form>
		<Input
			label="Your name"
			name="name"
			placeholder="Your name"
			v-model:value="v.nameField.$model"
			:error="v.nameField.$errors"
		/>
		<Input
			label="Your email"
			name="email"
			placeholder="Your email"
			v-model:value="v.emailField.$model"
			:error="v.emailField.$errors"
		/>
		<Input
			label="Your lucky number"
			name="lucky"
			placeholder="Your lucky number"
			v-model:value="v.luckyFiled.$model"
			:error="v.luckyFiled.$errors"
		/>
	</form>
</template>

<style lang="scss" scoped></style>
