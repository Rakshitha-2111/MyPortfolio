<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderNode />
    <main>
      <router-view></router-view> <!-- This is where the routed components will be rendered -->
    </main>
    <FooterNode />
  </div>
</template>

<script>
import HeaderNode from './components/HeaderNode.vue';
import FooterNode from './components/FooterNode.vue';

export default {
  name: 'App',
  components: {
    HeaderNode,
    FooterNode
  }
}
</script>

<style>
/* Global styles for the app */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f4f4f9; /* Light grey background for the app */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header styling */
header {
  background-color: #4CAF50; /* Green background */
  color: #fff; /* White text */
  padding: 1rem 2rem;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

/* Main content styling */
main {
  padding: 2rem;
  margin-top: 80px; /* Space for the fixed header */
}

/* Footer styling */
footer {
  background-color: #4CAF50; /* Green background */
  color: #fff; /* White text */
  text-align: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

footer p {
  margin: 0;
}
</style>
