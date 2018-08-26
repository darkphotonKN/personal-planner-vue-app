<template>
    <div class="title-wrap">
      <h1 class="main-title">{{ title }}</h1>
    </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Daily Planner'
    }
  }

};
</script>

<style>

  .title-wrap {
    height: 200px; 
    width: 100%;  
    background-color: #E5E5E5;/* FF715B */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-wrap h1 {
    font-size: 80px; 
    color: #42b983;
    font-family: 'Dosis', sans-serif;
  }

</style>
