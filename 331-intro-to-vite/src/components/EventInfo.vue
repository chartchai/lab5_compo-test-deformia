<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/type'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="text-right p-[20px] w-[250px] cursor-pointer border border-gray-600 mb-[18px] hover:scale-[1.01] hover:shadow-sp">
    <div class="text-base">{{ event.category }}</div>
    <div class="text-base">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>

</style>
