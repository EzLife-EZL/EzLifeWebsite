<script setup lang="ts">
import { useRoute } from "vue-router";
type Project = {
  id: number;
  name: string;
  image?: string;
  description?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  teamMembers?: string[];
};

const route = useRoute();
const projectId = route.params.id as string;

const {
  data: project,
  pending,
  error,
} = await useFetch<Project>(`/api/projects/${projectId}`);
</script>

<template>
  <div v-if="pending" class="loader-wrapper">
    <div class="loader"></div>
  </div>

  <div v-else-if="error">Lỗi khi tải dữ liệu {{ error.message }}</div>

  <div v-else-if="project">
    <h1>{{ project.name }}</h1>
    <img :src="project.image" alt="Project image" />
    <p>{{ project.description }}</p>
    <p>Trạng thái: {{ project.status }}</p>
    <p>Ngày bắt đầu: {{ project.startDate }}</p>
    <p>Ngày kết thúc: {{ project.endDate }}</p>

    <h3>Thành viên:</h3>
    <ul>
      <li v-for="member in project.teamMembers" :key="member">
        {{ member }}
      </li>
    </ul>
  </div>

  <div v-else>Không tìm thấy dự án.</div>
</template>
