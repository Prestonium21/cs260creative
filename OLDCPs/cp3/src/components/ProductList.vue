<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/unsamples/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button v-on:click="addCart(product.name)" class="cartAdd">Add to List</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
	productFilter(name) {
		return this.$root.$data.products.find(product => product.name === name);
	},
    addCart(name) {
		this.$root.$data.cart.push(this.productFilter(name));
		this.$root.$data.cartnum += 1;
  	},
	removeCart() {

	}
  }
}


</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 5px;
  margin-top: 50px;
  width: 300px;
}

.product img {
  border: 2px solid #333;
  height: 360px;
  width: 300px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: teal;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
