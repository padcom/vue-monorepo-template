<!-- eslint-disable max-len -->
<template>
  <h2 class="header mt-10">{{ message }}</h2>
  <HelloWorld message="from App.vue in packages/world" />
  <p class="note">Now, delete me and get to work!</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { sayHello, HelloWorld } from '@padcom/common'

const message = ref('...world!')
sayHello(message.value)
</script>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
