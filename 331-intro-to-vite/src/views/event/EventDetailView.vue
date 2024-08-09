<script setup lang="ts">
import type { Event } from '@/type'
import type { PropType } from 'vue'
import 'nprogress/nprogress.css'

defineProps({
  event: {
    type: Object as PropType<Event>,
    required: true
  }
})
</script>

<template>
  <div v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
