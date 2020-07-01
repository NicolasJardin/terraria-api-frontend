<template>
  <div id="app">

    <nav class="green">
      <a href="/home">Menu</a>
      <a href="/about">Sobre</a>
      <a href="/mounts">Montarias</a>
      <a href="/pets">Pets</a>
    </nav>

    <router-view></router-view>

</div>

</template>

<script>
export default {
  name: 'App',
  components: {
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body {
  background-image: url("./assets/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
