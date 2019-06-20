<template>
  <div class="pokedex">
    <h2>Pokedex</h2>
  </div>
</template>

<script>
// Imported axios
import axios from 'axios';

export default {
  name: 'Pokedex',
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

</style>
