<template>
  <div class="category-box">
    <div>
      <img :src="category.imageUrl" alt="Category image">
    </div>
    <div>
      <router-link :to="{ name: 'ListProducts', params: { id: category.id } }">
        <h5>{{ category.categoryName }}</h5>
      </router-link>
      <p>{{ category.description.substring(0, 65) }}..</p>
      <router-link
        id="edit-category"
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="$route.name === 'AdminCategory'"
      >
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {
    listProducts() {
      this.$router.push({
        name: "ListProducts",
        params: { id: this.category.id },
      });
    },
  },
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
