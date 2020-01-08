<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./components/Index";
import './config/fontSize';

export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
