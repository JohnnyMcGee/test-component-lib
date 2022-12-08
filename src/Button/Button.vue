<script lang="ts" setup>
defineProps({
	color: {
		type: String,
		default: "#7878ff"
		}
});
</script>

<template>
	<button class="btn" :style="{backgroundColor: color}">
	Imported Button
	</button>
</template>

<style scoped>
.btn {
	color: white;
	border-radius: 48px;
	border: none;
	padding: 16px 32px;
	font-size: 16px;
	font-weight: 700;
	}
</style>
