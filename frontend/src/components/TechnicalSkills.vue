<!-- src/components/TechnicalSkills.vue -->
<template>
  <div class="technical-skills">
    <div class="content">
      <h1>Technical Skills</h1>
      <ul>
        <li><strong>Programming Languages:</strong> Java, C, C++, Python (Basic)</li>
        <li><strong>Web Development:</strong></li>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Vue.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
        </ul>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>Computer Science Fundamentals:</strong> Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating Systems</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalSkills'
}
</script>

<style scoped>
.technical-skills {
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
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

ul {
  color: #333;
  line-height: 1.6;
  list-style-type: none;
  padding: 0;
}

ul > li {
  margin-bottom: 15px;
}

ul ul {
  margin-left: 20px;
}

ul ul li {
  margin-bottom: 10px;
  animation: fadeIn 1.5s ease-out;
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
