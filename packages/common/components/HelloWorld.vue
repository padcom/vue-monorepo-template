<template>
  <h1>Hello, world! {{ message }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-3xl;
}
</style>
