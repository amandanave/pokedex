<template>
  <div class="pokedex">
    <img src="./../assets/logo-pixel.gif" alt="pokémon">
    <p>Welcome to the Pokedex name and image finder!</p>
    <form v-on:submit.prevent="findPokemon">
      <p>
        Find Pokemon who's name starts with
        <input type="text" v-model="name">
        <button type="submit">Search</button>
      </p>
    </form>
    <ul>
      <li class="resultgrid" v-for="(item, index) in pokelist" :key="index">
        <div>
          {{ item.name }}
        </div>
        <div>
          <button v-on:click="goToPokeimage(item)" class="nes-btn">Get Image</button>
        </div>
      </li>
    </ul>
    <ul class="errors" v-if="errors && errors.length > 0">

      <li v-for="(error, index) of errors" :key="index">

        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
// Imported axios
import axios from "axios";

export default {
  name: "Pokedex",
  data() {
    return {
      results: null,
      errors: [],
      name: "",
      pokelist: null
    };
  },
  methods: {
    findPokemon: function() {
      this.errors = []
      if (this.name.length === 0) {
        this.errors.push ({message: 'Please enter a search value'})
      } else {
        this.pokelist = this.results.filter(result => {
          if (result.name.startsWith(this.name)) {
            return result;
          }
        });
        this.name = ""
      }
    },
    goToPokeimage: function(item) {
      this.$router.push({ name: "pokeimage", params: { item } });
    }
  },
  created: function() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          limit: 151
        }
      })
      .then(response => {
        this.results = response.data.results;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
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

ul.errors {
  list-style-type: none;
}
.errors li {
  color: #000000;
  padding: 0.5rem;
  margin: 10px 0;
}

.resultgrid {
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 1fr;
}
</style>
