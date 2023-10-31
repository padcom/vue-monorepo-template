<!-- eslint-disable max-len -->
<template>
  <HelloWorld message="from App.vue in packages/world" />
  <p class="note">Now, delete me and get to work!</p>
</template>

<script lang="ts" setup>
import { HelloWorld } from '@padcom/common'
</script>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
