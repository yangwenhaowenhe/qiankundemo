<template>
  <div id="app">
    <nav>
      <router-link to="/1">Home</router-link> | <router-link to="/about1">About</router-link>|
      <router-link to="/vuesubapp">vuesubapp</router-link>
    </nav>
    <router-view />
    <div id="subapp-viewport"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
