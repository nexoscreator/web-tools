<template>
  <section class="features">
    <h2>Key Features</h2>
    <div class="feature">
      <!-- <img src="/feature1.png" alt="Feature 1"> -->
      <h3>Feature 1</h3>
      <p>Description of feature 1.</p>
    </div>
    <div class="feature">
      <!--<img src="/feature2.png" alt="Feature 2">-->
      <h3>Feature 2</h3>
      <p>Description of feature 2.</p>
    </div>
    <div class="feature">
      <!--<img src="/feature3.png" alt="Feature 3">-->
      <h3>Feature 3</h3>
      <p>Description of feature 3.</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
  .features {
    text-align: center;
    padding: 2rem;
  }

  .feature {
    display: inline-block;
    width: 30%;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem;
  }
</style>