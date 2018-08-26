<template>
  <div id="app">
    <Title />
    <Landing />
  </div>
</template>

<script>
import Landing from './components/Landing.vue';
import Title from './components/Title.vue';

export default {
  name: 'app',
  components: {
    Landing,
    Title
  }
}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFFFF;
  height: 100vh;
  width: 100%;
}

</style>
