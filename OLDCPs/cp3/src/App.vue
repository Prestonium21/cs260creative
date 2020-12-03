<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img class="logo" src="./assets/logo.svg">
      </router-link>
    </div>
    <div id="brandname">
        <h1>MetaBG</h1>
    </div>
    <div id="side">
      <router-link to="/about">
        <div class="menu-item about">
          <img src="/images/about.jpg">
          <p>About</p>
        </div>
      </router-link>
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/tags.svg">
          <p>Categories</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item cart">
          <img src="/images/list.svg">
          <p id="cartnum">{{cartnum}} items</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div>
    <a class="footer" href="https://github.com/Prestonium21/cs260creative.git">Github Repo</a>
  </div>
</div>
</template>

<script>
export default {
	computed: {
		cartnum() {
			return this.$root.$data.cart.length;
			//console.log(this.$root.$data.cart);
		}
	}
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#app {
  min-height: 95vh;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  padding: 10px;
  background-color: teal;
  border-radius: 10px;
  justify-content: space-between;
}

#menu a {
  color: lightgray;
}

#brand {
  display: flex;
  justify-content: left;
}

#brand img {
  width: 5vw;
  border: 0;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.about {
  margin-right: 20px;
}

.browse {
  margin-right: 10px;
}


.footer {
    background-color: teal;
    border: none;
    color: black;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    position: sticky;
    bottom: 0px;
    font-weight: bold;
    border-radius: 8px;
}
</style>
