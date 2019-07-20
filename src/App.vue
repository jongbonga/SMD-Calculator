<template>
  <div id="app" class="container my-4">
    <Calculator msg="Welcome to Your Vue.js App" class="my-5" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "app",
  components: {
    Calculator
  }
};
</script>

<style>
body,
html {
  background-color: #7c5d2f !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  border-radius: 30px !important;
}
.card-header {
  border-radius: 30px 30px 0 0 !important;
}
.card-footer {
  border-radius: 0 0 30px 30px !important;
}
</style>
