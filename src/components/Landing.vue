<template>

<div class="landing">
  
  <div class="column output">
    <p>Manipulate Data</p>
    <input type="text" name="" id="add-movie">
    <button class="btn">Add Movie</button>
    <button @click="getMovies" class="btn">Get Data</button>

    <!-- todo list functionality -->
    <div class="todo-wrap">
      <h2 class="todo-title mt">Todo List</h2>
      <input type="text" class="todo-input" v-model="todoInput">
      <button class="btn" @click="addTodo">Add Todo</button>
      <h2 class="todo-output-title mt" v-if="todoInputList.length>0">Todo Output</h2>
      <div class="todo-output mt" v-for="(data, index) in todoInputList" :key='index'>
        {{ todoInputList.length !== 0 ? data : null }}
      </div>
    </div>

  </div>
  <div class="column input">Movie Data
    <h2 class="mt">{{ movieData.length > 0  ? 'Here are the ' + movieData.length + ' movies in your Database:' : null }}</h2>
    <div class="fetched-data mt" v-for="(data, index) in movieData" :key='index'>
        <ul>
          <li>{{ data }}</li>
        </ul>
      </div>
  </div>

</div>
    
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      endPoint: 'http://localhost:3900/api/movies',
      movieData: [],
      // todo list 
      todoInput: '', // store current input
      todoInputList: [] // store the list elements
    }
  }, 

  // methods 
  methods: {
    // use axios to retrieve data from endpoint 
    getMovies: async function() {

      if(this.movieData.length === 0) {
      
        const { data: movies } = await axios.get(this.endPoint);
        // store each object's movie title into the movieData array
        console.log(movies);
        movies.forEach(movie => {
          this.movieData.push(movie.title);
        });
      }
    },

    addTodo: function() {
      // add current todo input to the todo input list 
      this.todoInputList.push(this.todoInput);
    }

  },

  // computed 
  computed: {

  }

}
    
</script>

<style>

.landing {
  background-color: #fff;
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Dosis', sans-serif;
}

.landing .column.output {
  font-weight: bold;  
  border-top: 3px solid black;
  padding: 1.2rem;
  font-size: 30px;
  background-color: #fff
}

.output input {
  width: 150px; 
  height: 40px; 
  border: 1.5px solid #42b983;
  border-radius: 7px;
  padding: 2px 2px;
  margin-right: 10px;
  font-family: 'Dosis';
  font-size: 17px;
}

.landing .column.input {
  font-weight: bold;
  border-top: 3px solid black;
  border-left: 3px solid black;
  padding: 1.2rem;
  font-size: 30px;
  background-color: #fff
}

.btn {
  margin-right: 10px;
  margin-top: 20px;
  height: 40px; 
  width: 90px; 
  color: #42b983;
  border-radius: 7px; 
  border: 1.5px solid #42b983;
  cursor: pointer;
  transition: 300ms ease-in-out;
  font-family: 'Dosis', sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.btn:hover {
  color: black; 
  background-color: #42b983;
}

.fetched-data {
  font-size: 22px;
}

.fetched-data li {
  list-style: none;
}

.input h2 {
  font-size: 26px;
}

.mt {
  margin-top: 30px;
}

</style>
