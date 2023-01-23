<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import cars from "@/data/cars.json";
import GoBack from "@/components/GoBack.vue";

const route = useRoute(); //ne prikazuju se podaci kad nema route.Ima Id u URL,ali nema podataka.
const router = useRouter();

const carId = parseInt(route.params.id);

const car = cars.find((car) => car.id === carId); // pronadje auto

const showContact = () => {
  if (carId === 4) return;
  return router.push(`/cars/${carId}/contact`);
};
</script>

<template>
  <div v-if="car" class="card" style="width: 23rem">
    <div class="card-body p-0">
      <img
        class="card-img-top"
        alt="slika"
        :src="car.img"
        width="320"
        height="180"
      />
      <p class="card-text">Name ->{{ car.name }}</p>
      <p class="card-text">Year ->{{ car.year }}</p>
      <p class="card-text">Price ->${{ car.price }}</p>
      <button id="button" @click="showContact">Clic for contact</button>
    </div>

    <RouterView />
    <GoBack />
  </div>
  <div v-else>
    <!-- ako nema auta sa ne postojecim Id,na primer 2016 auto,saljemo gresku -->
    <h1>Car not found</h1>
  </div>
</template>

<style scoped>
.card button {
  color: rgb(239, 239, 240);
  background-color: crimson;
  width: 100%;
  cursor: pointer;
}
.card .card-body .card-text {
  color: crimson;
  text-align: center;
}
.card {
  margin-top: 30px;
  position: 100%;
  left: 35%;
}
</style>
