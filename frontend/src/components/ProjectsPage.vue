<!-- src/components/Projects.vue -->
<template>
  <div class="projects">
    <div class="content">
      <h1>My Projects</h1>
      <h2>Rakshitha’s Interactive Portfolio: A Full-Stack Showcase</h2>
      <p>Developed a personal portfolio website to display my projects and skills. Key features include:</p>
      <ul>
        <li>Frontend: Built with HTML, CSS, and JavaScript, and enhanced with Vue.js for interactive components.</li>
        <li>Backend: Created a server using Node.js and Express.js to handle API requests and data processing.</li>
        <li>Database: Integrated MongoDB for data storage, utilizing Mongoose for efficient database management.</li>
        <li>API Integration: Incorporated the GitHub API to dynamically display my GitHub repositories and contributions.</li>
        <li>Version Control: Managed development using Git for version control.</li>
        <li>Deployment: Deployed the website to ensure a seamless and functional user experience.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
}
</script>

<style scoped>
/* Container styling */
.projects {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  min-height: 100vh;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Content styling */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-out;
}

/* Heading styling */
h1 {
  font-size: 2.5rem;
  color: #1e90ff;
  margin-bottom: 20px;
  animation: slideIn 1s ease-out;
}

h2 {
  font-size: 1.8rem;
  color: #4682b4;
  margin-bottom: 20px;
  animation: slideIn 1.5s ease-out;
}

/* Paragraph and list styling */
p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  line-height: 1.6;
}

li {
  font-size: 1rem;
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
