<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/type'
import { ref, onMounted, watchEffect, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'
import 'nprogress/nprogress.css';


const events = ref<Event[]>([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  eventsPerPage: {
    type: Number,
    required: true
  }
})
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(props.eventsPerPage, props.page).then(
      (response: AxiosResponse<Event[]>) => {
        events.value = response.data
        totalEvent.value = parseInt(response.headers['x-total-count'])
      }
    )
  })
})
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.eventsPerPage)
  return props.page < totalPages && events.value.length > 0
})
</script>

<template>
  <h1>Event for good</h1>
  <!--new element-->
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <EventInfo v-for="event in events" :key="event.id" :event="event"></EventInfo>
    <div class="flex w-[290px] justify-between mt-4">
      <RouterLink
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        class="text-left text-gray-700 no-underline"
        id="page-prev"
      >
        Prev Page</RouterLink
      >
      <RouterLink
        :to="{ name: 'event-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="text-right text-gray-700 no-underline"
        id="page-next"
      >
        Next Page</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
