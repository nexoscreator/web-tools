<template>
  <div>
    <h1>{{ tool.name }}</h1>
    <img :src="tool.image" :alt="tool.name">
    <p>{{ tool.description }}</p>
    <h2>Installation</h2>
    <pre>{{ tool.installation }}</pre>
    <h2>Usage</h2>
    <pre>{{ tool.usage }}</pre>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const tool = ref({})

onMounted(() => {
  // Simulate fetching tool data
  const toolId = route.params.toolId
  tool.value = {
    id: toolId,
    name: `Tool ${toolId}`,
    description: `Description of tool ${toolId}.`,
    image: `/tool${toolId}.png`,
    installation: `Installation instructions for tool ${toolId}.`,
    usage: `Usage instructions for tool ${toolId}.`
  }
})
</script>

<style scoped>
/* Styles specific to the tool detail page */
</style>
