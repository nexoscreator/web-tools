<template>
  <div>
    <header class="bg-gray-800 text-white py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-semibold">Nexos Tools</div>
        <div class="space-x-4">
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/tools" class="hover:underline">Tools</NuxtLink>
          <NuxtLink to="/preview" class="hover:underline">Preview</NuxtLink>
          <NuxtLink to="/support" class="hover:underline">Support</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import Footer from '@/components/Footer.vue'
</script>