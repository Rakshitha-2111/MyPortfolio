<!-- src/components/Home.vue -->
<template>
  <div class="home">
    <div class="hero-section">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a showcase of my work and skills.</p>
    </div>
    <div class="intro">
      <p>Explore my projects, skills, and experiences below.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Basic reset for body margin and padding */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Home container styling */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
  text-align: center;
  padding: 0 20px;
}

/* Hero section styling */
.hero-section {
  margin: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-out;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  animation: fadeIn 2s ease-out;
}

/* Intro section styling */
.intro {
  margin: 20px;
}

.intro p {
  font-size: 1.1rem;
  color: #f0f0f0;
}

/* Keyframe animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
