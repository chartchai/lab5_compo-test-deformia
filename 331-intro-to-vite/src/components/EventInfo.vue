<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/type'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-info">
    <div class="event-category">{{ event.category }}</div>
    <div class="event-organizer">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-info {
  text-align: right;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-category,
.event-organizer {
  font-size: 16px;
}

.event-info:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
