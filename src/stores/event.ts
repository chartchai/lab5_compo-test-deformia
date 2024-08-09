import type { EventState, Event } from '@/type'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('event', {
  state: (): EventState => ({
    event: null
  }),
  actions: {
    setEvent(event: Event): void {
      this.event = event
    }
  }
})
