<!-- src/components/HeaderNode.vue -->
<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/technical-skills">Technical Skills</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNode'
}
</script>

<style scoped>
/* Basic styling for the HeaderNode */
header {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
