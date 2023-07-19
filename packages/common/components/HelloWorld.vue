<template>
  <h1 class="my-4">Hello, world! {{ message }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  message: { type: String, default: 'Hello, world! from HelloWorld.vue' },
})
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-lg;
}
</style>
