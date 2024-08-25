<!-- src/components/EducationPage.vue -->
<template>
  <div class="education-page">
    <div class="content">
      <h1>Education</h1>
      <p><strong>B.E in Computer Science</strong></p>
      <p>Dec 2022 - Present</p>
      <p>Siddaganga Institute Of Technology, Tumkur, Karnataka</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationPage'
}
</script>

<style scoped>
.education-page {
  background: linear-gradient(135deg, #fafafa, #eaeaea);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  max-width: 600px;
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
