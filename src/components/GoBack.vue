<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <span class="go-back">
    <button @click="router.back()">go back</button>
  </span>
</template>
<style scoped>
.go-back button {
  color: white;
  background: crimson;
  width: 100%;
  cursor: pointer;
  margin-top: 5px;
}
</style>
