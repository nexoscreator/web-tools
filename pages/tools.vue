<template>
  <div>
    <h1>Our Tools</h1>
    <div class="tool-list">
      <ToolCard v-for="tool in tools" :key="tool.id" :tool="tool" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToolCard from '@/components/ToolCard.vue'

const tools = ref([
  { id: 1, name: 'Tool 1', description: 'Description of tool 1.', image: '/tool1.png' },
  { id: 2, name: 'Tool 2', description: 'Description of tool 2.', image: '/tool2.png' },
  { id: 3, name: 'Tool 3', description: 'Description of tool 3.', image: '/tool3.png' }
])
</script>

<style scoped>
.tool-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
