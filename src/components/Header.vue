<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary navheader">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sample" class="nav-link">Bootstrap Sample</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navheader"
};
</script>
<style lang="scss">
a {
  &.router-link-exact-active {
    font-weight: bold;
    color: #fff;
  }
}
</style>


