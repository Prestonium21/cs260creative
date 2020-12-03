<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Scenery')" href="#" class="pure-menu-link">Scenery</a></li>
      <li class="pure-menu-item"><a @click="select('Walls')" href="#" class="pure-menu-link">Walls</a></li>
      <li class="pure-menu-item"><a @click="select('Patterns')" href="#" class="pure-menu-link">Patterns</a></li>
      <li class="pure-menu-item"><a @click="select('Structures')" href="#" class="pure-menu-link">Structures</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      category: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.category === this.category);
    }
  },
  methods: {
    select(category) {
      this.category = category;
    }
  }
}
</script>
