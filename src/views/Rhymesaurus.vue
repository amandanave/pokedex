<template>
  <div class="rhymesaurus">
    <h2>Rhymesaurus: The Rhyming Thesaurus</h2>
    <p>
      <router-link to="/adjfornoun">Adjective For Noun</router-link>
    </p>
    <!-- Used a submit event handler to allow the findWords method to handle this form submission. -->
    <form v-on:submit.prevent="findWords">
      <p>Find rhymes for <input type="text" v-model="rhyme"> related to <input type="text" v-model="phrase"> <button type="submit">Search</button></p>
    </form>
    <!-- Added a v-if conditional to make this results list show only if there are results and if the length is greater than 0. -->
    <ul class="results" v-if="results && results.length > 0">
      <!-- Added a v-for loop to the LI tag to loop through the items in the results. -->
      <li class="item" v-for="(item,index) of results" :key="index">
        <!-- Output word --> 
        <p><strong> {{item.word}}</strong></p>
        <!-- Output score -->
        <p>{{item.score}}</p>
      </li>
    </ul>

    <!-- Added a `v-else-if` conditional to make this message only show if there are no results returned (but we have actually attempted a request). -->
    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <!-- Added a v-if conditional to make this errors list show only if there are errors and if the length is greater than 0. -->
    <ul class="errors" v-if="errors && errors.length > 0">
      <!-- Added a v-for loop to the LI tag to loop through the errors. -->
      <li v-for="(error, index) of errors" :key="index">
        <!-- Output each error. -->
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
// Imported axios
import axios from 'axios';

export default {
  name: 'Rhymesaurus',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      rhyme: ''
    }
  },
    // Created the findWords method
    methods: {
      findWords: function(){
      axios.get('https://api.datamuse.com/words', {
        params: {
          ml: this.phrase,
          rel_rhy:this.rhyme
        }
      })
      .then(response =>{
        this.results = response.data
      })
      .catch(error =>{
        this.errors.push(error)
      })
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rhymesaurus {
  font-size: 1.4rem;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
