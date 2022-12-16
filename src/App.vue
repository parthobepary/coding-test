<template>
  <main>
    <div>
      <Header_nav />
    </div>
    <router-view></router-view>
    <div>
      <Footer_vue />
    </div>
  </main>
</template>

<script>
import Footer_vue from './components/Share/Footer_vue.vue';
import Header_nav from './components/Share/Header_nav.vue';

export default {
  components: { Header_nav, Footer_vue }
}
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
}
</style>
