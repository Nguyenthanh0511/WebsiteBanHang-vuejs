<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="pt-3">Sản phẩm</h3>
            <router-link :to="{name:'AddProduct'}">
                <button class="btn">Thêm sản phẩm</button>
            </router-link>
        </div>  
    </div>
    <div class="row">
        <div
        v-for="product of products"
        :key ="product.id"
        class="col-xl-4 col-md-4 col-12 pt-3 d-flex"
        >
        <ProductBox :product="product"> </ProductBox>
        </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox.vue'
export default {
    name:'ProductChild', // đặt tên như này để tránh multipl-word
    components:{ProductBox},
    props:["products"],
    data(){
        return{
            baseURL: "https://limitless-lake-55070.herokuapp.com/"
        };
    },
    methods: {
    },
    mounted(){
    }
}
</script>

<style>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
}
.product-box {
 border: 1px solid #ccc;
 padding: 1rem;
 text-align: center;
}
.d-flex{
  display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>
//