<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <div id="nav">
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink> |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </div>

    <RouterView :event="event"></RouterView>
  </div>
</template>
