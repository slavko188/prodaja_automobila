<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="nav-menu">
      <ul class="navbar">
        <li class="nav-item">
          <RouterLink active-class="active" to="/"> Home </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink active-class="active" to="/about"> About </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.navbar .nav-menu .navbar .nav-item {
  margin-top: 10px;
  padding-left: 50px;
}

.active {
  color: crimson;
}
</style>
