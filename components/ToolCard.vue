<template>
  <div class="tool-card">
    <img :src="tool.image" :alt="tool.name">
    <h3>{{ tool.name }}</h3>
    <p>{{ tool.description }}</p>
    <NuxtLink :to="'/tools/' + tool.id">Learn More</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  tool: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.tool-card {
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;
}
.tool-card img {
  max-width: 100%;
  height: auto;
}
.tool-card h3 {
  margin: 1rem 0 0.5rem;
}
</style>
