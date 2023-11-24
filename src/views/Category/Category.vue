<template>
   <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Our Categories</h4>
        <router-link id="add-category" :to="{name : 'AddCategory'}" >
          <button class="btn">Add a new Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="category of categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <CategoryBox :category="category">
        </CategoryBox>
      </div>
    </div>
  </div>
</template>

<script>
const axios = requires("axios");
import axios from "axios";
import CategoryBox from'../../components/Catagory/CategoryBox.vue'
export default {
    name:'Category',
    components :{CategoryBox},
    props:["baseUrl","categories"],
    mounted(){
        if(this.$router.name==='AdminCategory'&&!localStorage.getItem('token')){
            this.$router.push({name: 'Signin'});
        }
    }
}
</script>

<style>

</style>