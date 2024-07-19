<template>
  <div>
    <h1>Tool Previews</h1>
    <div class="preview-list">
      <div class="preview-item" v-for="preview in previews" :key="preview.id">
        <img :src="preview.image" :alt="preview.name">
        <h3>{{ preview.name }}</h3>
        <p>{{ preview.description }}</p>
        <NuxtLink :to="'/tools/' + preview.toolId">View Tool</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const previews = ref([
  { id: 1, toolId: 1, name: 'Preview 1', description: 'Preview of tool 1.', image: '/preview1.png' },
  { id: 2, toolId: 2, name: 'Preview 2', description: 'Preview of tool 2.', image: '/preview2.png' },
  { id: 3, toolId: 3, name: 'Preview 3', description: 'Preview of tool 3.', image: '/preview3.png' }
])
</script>

<style scoped>
.preview-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.preview-item {
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;
  width: 30%;
}
.preview-item img {
  max-width: 100%;
  height: auto;
}
</style>
