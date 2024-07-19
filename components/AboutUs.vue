<template>
  <section class="about-us">
    <h2>About Us</h2>
    <p>Nexos Tools is dedicated to empowering developers with the best tools available.</p>
    <div class="team">
      <div class="member">
        <!--      <img src="/team1.jpg" alt="Team Member 1"> -->
        <h3>Team Member 1</h3>
        <p>Role</p>
      </div>
      <div class="member">
        <!--     <img src="/team2.jpg" alt="Team Member 2"> -->
        <h3>Team Member 2</h3>
        <p>Role</p>
      </div>
      <div class="member">
        <!--  <img src="/team3.jpg" alt="Team Member 3"> -->
        <h3>Team Member 3</h3>
        <p>Role</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
  .about-us {
    text-align: center;
    padding: 2rem;
  }

  .team {
    display: flex;
    justify-content: center;
  }

  .member {
    margin: 1rem;
    text-align: center;
  }

  .member img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
</style>