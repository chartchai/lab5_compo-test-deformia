<script setup lang="ts">
import type { Student } from '@/type'
import 'nprogress/nprogress.css'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div
    class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-[1.01] hover:shadow-sp"
  >
    <h2>{{ student.name + ' ' + student.surname }}</h2>
    <h2>GPA: {{ student.gpa }}</h2>
  </div>
</template>

<style scoped></style>
