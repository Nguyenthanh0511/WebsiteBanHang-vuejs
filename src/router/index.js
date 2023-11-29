import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from'../views/Category/AddCategory'
import Category from '../views/Category/Category'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProudct.vue'
import Admin from '../views/AdminView'
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path:'/admin/product',
    name:'Product',
    component:Product
  },
  {
    path: '/admin/view',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product/addNewProduct',
    name: 'AddProduct',
    component: AddProduct
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
