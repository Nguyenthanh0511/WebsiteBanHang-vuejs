<template>
 <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="category.imageUrl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ category.categoryName }}</h5>
      <p class="card-text">
        {{ category.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>

// export default {
//   name: "CategoryBox",
//   props: ["category"],
//   methods: {
//     listProducts() {
//       this.$router.push({
//         name: "ListProducts",
//         params: { id: this.category.id },
//       });
//     },
//   },
// };
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>

<style scoped>
/* .category-box {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}

.category-box img {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
}

.category-box div {
  flex: 1;
}

.category-box h5 {
  margin: 0;
}

#edit-category {
  color: blue;
  cursor: pointer;
} */
</style>
