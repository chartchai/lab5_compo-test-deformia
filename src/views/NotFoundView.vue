<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Oop!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink :to="{ name: 'even-list' }">Back to home page</RouterLink>
</template>
