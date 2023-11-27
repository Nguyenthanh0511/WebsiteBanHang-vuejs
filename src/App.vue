<template>
  <MainView/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view
  :baseURL ="baseURL"
  :categories="categories"
  >
  </router-view>
</template>
<script>
import axios from 'axios'
import MainView from './components/MainView.vue'
export default {

  components:{MainView},
  data(){
    return{
      baseURL :'https://limitless-lake-55070.herokuapp.com/',
      products:[],
      categories:[]
    }
  },
  methods:{
     async fetchData(){
      await axios.get(this.baseURL + "category/")
      .then((res)=>(this.categories = res.data))
      .catch((err)=> console.log('err',err));
     }
  },
  mounted(){
    this.fetchData();
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
