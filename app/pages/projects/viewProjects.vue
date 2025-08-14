<script lang="ts" setup>
type Project = {
  id: number;
  name: string;
  image: string;
};

const {
  data: projects,
  error,
  pending,
} = await useFetch<Project[]>("/api/projects", {
  lazy: true,
});

const viewProjectDetail = (id: number) => {
  navigateTo(`/projects/${id}`);
};

const viewMoreProjects = () => {
  alert("Xem thêm dự án clicked");
};
</script>

<template>
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card card-1">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>500+</h3>
          <p>Dự án<br />EzLife</p>
        </div>
      </div>

      <div class="stat-card card-2">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>9689+</h3>
          <p>Dự án<br />Website</p>
        </div>
      </div>

      <div class="stat-card card-3">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M9 11H7v9a2 2 0 002 2h6a2 2 0 002-2v-9h-2m1-4V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M7 7h10"
            />
          </svg>
        </div>
        <div class="content">
          <h3>500+</h3>
          <p>Dự án<br />Mobile App</p>
        </div>
      </div>

      <div class="stat-card card-4">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>600+</h3>
          <p>Phần mềm<br />đang vận hành</p>
        </div>
      </div>

      <div class="stat-card card-5">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>50+</h3>
          <p>Dự án <br />triển khai thành công</p>
        </div>
      </div>

      <div class="stat-card card-6">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>250+</h3>
          <p>Dự án <br />ấn tượng</p>
        </div>
      </div>
    </div>

    <!-- Search -->
    <div class="search-section">
      <div class="search-container">
        <div class="search-icon-input">
          <svg
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            fill="blue"
          >
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
            />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiếm dự án chất lượng"
            class="search-input"
          />
        </div>

        <div class="search-select-wrapper">
          <select class="search-select">
            <option>Tất cả các ngành</option>
            <option>Website Premium</option>
            <option>Ứng dụng di động</option>
            <option>Phần mềm ERP</option>
            <option>SEO Marketing</option>
            <option>E-learning</option>
            <option>Media & Design</option>
          </select>
        </div>

        <button class="search-button">Tìm kiếm dự án</button>
      </div>
    </div>

    <!-- Project List -->
    <div class="project-list-container">
      <div v-if="error">
        <p style="color: red">Lỗi khi tải dữ liệu: {{ error.message }}</p>
      </div>

      <div v-if="pending" class="loader-wrapper">
        <div class="loader"></div>
      </div>

      <div v-if="!pending && projects?.length === 0">
        <p>Không có dự án nào.</p>
      </div>

      <div
        v-for="project in projects"
        :key="project.id"
        class="project-item"
        @click="viewProjectDetail(project.id)"
      >
        <img
          :src="
            project.image ||
            'https://mona.media/wp-content/uploads/2024/01/Wolfoo-4.png'
          "
          alt="project image"
          class="project-image"
        />

        <div class="project-info">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="view-project-button">Chi tiết dự án ></p>
        </div>
      </div>
    </div>

    <button
      v-if="!pending"
      class="view-more-projects-button"
      @click="viewMoreProjects()"
    >
      Xem thêm dự án
    </button>
  </div>
</template>
