<template>  
    <div>
      <Header/>
      <router-view/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "sample",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./assets/styles/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
