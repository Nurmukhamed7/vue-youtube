<template>
	<h1 class="heading-1">Button from Button.vue (views)</h1>
	<h2 class="heading-2">Disabled</h2>
	<div class="line">
		<Button label="Primary" color="primary" disabled />
		<Button label="Primary" color="second" disabled />
	</div>
	<h2 class="heading-2">Colors</h2>
	<div class="line">
		<Button label="Primary" color="primary" />
		<Button label="Secondary" color="second" />
		<Button label="Success" color="success" />
		<Button label="Info" color="info" />
		<Button label="Warning" color="warning" />
		<Button label="Danger" color="danger" />
	</div>
	<h2 class="heading-2">Rounded</h2>
	<div class="line">
		<Button label="Primary" color="primary" rounded />
		<Button label="Secondary" color="second" rounded />
		<Button label="Success" color="success" rounded />
		<Button label="Info" color="info" rounded />
		<Button label="Warning" color="warning" rounded />
		<Button label="Danger" color="danger" rounded />
	</div>
	<h2 class="heading-2">Icon</h2>
	<div class="line">
		<Button color="primary" icon="heart" />
		<Button color="second" icon="address-book" />
		<Button color="success" icon="credit-card" />
		<Button color="info" icon="hand" />
		<Button color="warning" icon="hourglass" />
		<Button color="danger" icon="lemon" />
	</div>
	<h2 class="heading-2">Size</h2>
	<div class="line">
		<Button color="primary" label="Normal" />
		<Button color="second" label="Large" size="large" />
	</div>
	<h2 class="heading-2">Event</h2>
	<div class="line">
		<Button color="danger" label="@click" @click="eventForButton" />
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue'

const eventForButton = () => {
	alert('You clicked button')
}
</script>

<style lang="scss" scoped></style>
