<template>
  <div id="app">
    <header class="app-header">
      <h1>Task Manager1111</h1>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-header {
  padding: 20px;
  background-color: #42b983;
  color: white;
}

.app-main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
