<template>
  <div class="card w-100 h-35" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
        <img 
        class="card-img-top embed-responsive-item"
        :src="product.imageURL" 
        alt="Product">
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.description ? product.description.substring(0,65) : '' }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>     
  </div>
</template>

<script>
export default {
    name:"ProductBox",
    props :["product"], // Điểm tựa để revice data 
    // methods:{},
}
</script>
<style scoped>
.card-img-top{
  object-fit: cover;
}
</style>