<template>
  <div id="app">
    <div id="nav">
      <img alt="logo" class="logo" src="./assets/logo.svg" />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: teal;
  border-radius: 1vw;
}

#nav a {
  font-size: 1.5vw;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  width: 3vw;
  border: 0;
  float: left;
}
</style>
