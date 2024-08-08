<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/type'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getEvents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>My Student</h1>
  <!--new element-->
  <div class="flex flex-col items-center">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
</template>

<style scoped>

</style>
