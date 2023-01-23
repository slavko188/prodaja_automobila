<script setup>
import { useRoute } from "vue-router";
import cars from "@/data/cars.json";

const route = useRoute();

const car = cars.find((car) => car.id === parseInt(route.params.id));
</script>

<template>
  <div id="Car" v-if="car">
    <h1>Contact info</h1>
    <p>Ime: {{ car.contact.dealer }}</p>
    <p>Br.Tel: {{ car.contact.number }}</p>
  </div>
</template>

<style scoped>
#Car h1 {
  color: crimson;
  text-align: center;
}
#Car p {
  color: crimson;
  text-align: center;
}
</style>
