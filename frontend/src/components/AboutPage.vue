<!-- src/components/AboutPage.vue -->
<template>
  <div class="about-page">
    <div class="content">
      <h1>About Me</h1>
      <p>I am an adaptable software developer skilled in Java, C, C++, and Python, with hands-on experience in web development using HTML, CSS, JavaScript, and Vue.js. I’ve built a full-stack portfolio website with Node.js, Express.js, MongoDB, and the GitHub API. My strong problem-solving skills and attention to detail drive my ability to quickly learn and apply new technologies effectively.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  background: linear-gradient(135deg, #f9f9f9, #e2e2e2);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  max-width: 800px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-out;
}

h1 {
  font-size: 2.5rem;
  color: #1e90ff;
  margin-bottom: 20px;
  animation: slideIn 1s ease-out;
}

p {
  color: #333;
  line-height: 1.6;
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
