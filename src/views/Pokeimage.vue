<template>
  <div class="pokeimage">
    <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon">
    <h3 v-if="item">{{ item.name }}</h3>
        <div>
            <img :src="image" :alt="item.name">
        </div>
  </div>
</template>

<script>
// Imported axios
import axios from 'axios';

export default {
  name: 'Pokeimage',
  data () {
    return {
      results: null,
      errors: [],
      item: null,
      image: ""
    }
    },
    created: function () {
        this.item = this.$route.params.item;
        console.log(this.item)
        axios.get(this.item.url, {
        params: {
          limit: 151
        }
      })
      .then(response =>{
        this.results = response.data
        this.image = this.results.sprites.front_default
      })
      .catch(error =>{
        this.errors.push(error)
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .pokedex li {
   list-style-type: none;
   text-align: center;
 }

 .pokedex ul {
   width: 30%;
   margin: 0 auto;
   background-color: red;
 }
</style>
