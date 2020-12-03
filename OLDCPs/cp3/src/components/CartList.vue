<template>
<div class="wrapper">
  <div class="products">
	<div v-if="products.length === 0">
		<h2>Your list is empty, add items to see them here</h2>
	</div>
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
      </div>
	  <br/>
	  <button v-on:click="removeCart(product)" class="cartAdd">Remove from List</button>
	  <div class="image">
	    <img :src="'/images/unsamples/'+product.image">
	  </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
	productFilter(name) {
		return this.$root.$data.products.filter(product => product.name === name);
	},
    addCart(name) {
		this.$root.$data.cart += this.productFilter(name);
		this.$root.$data.cartnum += 1;
  	},
	removeCart(product) {
		this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product),1);
		this.$root.$data.cartnum -= 1;
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
  background: teal;
  margin: 10px;
  margin-top: 50px;
  width: 600px;
}

.product img {
  border: 2px solid #333;
  height: 200px;
  width: auto;
  object-fit: cover;
  background: teal;
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
  float: left;
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
  float: right;
  margin: 5px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  float: left;
  clear: left;
  margin: 5px;
}

.auto {
  margin-left: auto;
}
</style>
