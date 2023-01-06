<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Home /> -->
  <router-view />
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1{
  margin-bottom: 20px;
}

</style>
