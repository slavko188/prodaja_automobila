<script setup>
import cars from "@/data/cars.json";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div id="prodaja">
    <h1 class="tag">Prodaja automobila</h1>
    <div class="cars">
      <div
        @click="router.push(`/cars/${car.id}`)"
        v-for="car in cars"
        :key="car.id"
      >
        <h1>{{ car.name }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
#prodaja .tag {
  text-align: center;
  color: darkorange;
  margin-top: 40px;
}
.cars {
  display: flex;
}
.cars div {
  padding: 15px 0;
  margin: 40px;
  text-decoration: none;
  color: white;
  background-color: rgb(240, 123, 13);
  text-align: center;
  width: 100%;
  transition: 400ms;
  cursor: pointer;
}
.cars div:hover {
  background: rgb(233, 7, 18);
  color: black;
}
</style>
