<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vuesubapp/home">Home</router-link>
      |
      <router-link to="/vuesubapp/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('vue sub app---------------', this.$router.options,this.$route.matched)
  },
  watch: {
    '$route.path': function(val, old) {
      console.log('vue sub app---------------', this.$router.options,this.$route.matched)
    }
  },
  // computed: {
  //   base() {}
  // }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
