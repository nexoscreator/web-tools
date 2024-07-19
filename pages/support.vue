<template>
  <div>
    <h1>Support</h1>
    <section class="faq">
      <h2>Frequently Asked Questions</h2>
      <div v-for="faq in faqs" :key="faq.id" class="faq-item">
        <h3>{{ faq.question }}</h3>
        <p>{{ faq.answer }}</p>
      </div>
    </section>
    <section class="contact">
      <h2>Contact Support</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  { id: 1, question: 'How do I install Tool 1?', answer: 'You can install Tool 1 by following these steps...' },
  { id: 2, question: 'What is the usage of Tool 2?', answer: 'Tool 2 can be used for...' },
  { id: 3, question: 'Where can I find documentation?', answer: 'Documentation can be found on our website...' }
])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission logic here
  alert('Form submitted!')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.faq {
  margin-bottom: 2rem;
}
.faq-item {
  margin-bottom: 1rem;
}
.contact form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
