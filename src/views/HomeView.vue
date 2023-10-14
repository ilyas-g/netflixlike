<script setup lang="ts">

import { ref } from 'vue';
import BaseCard from '@/components/BaseCard.vue'

const token = import.meta.env.VITE_GRAY_TOKEN;

const product: any = ref(null);
const response: any = ref(null);

function getImage(imagePath: string) {
  const baseURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  return baseURL + imagePath;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => product.value = response)
  .then(response => console.log(response))
  .catch(err => console.error(err));

</script>

<template>
  <div>
      <h1 class="text-4xl">Homeview</h1>

      <BaseCard ok="lp" />
      <p>Product name: {{product?.dates.maximum}}</p>
      <ul class="mb-0">
          <li v-for="produc in product.results" :key="produc.id">
            Popularity: {{produc.original_title}}<br/>
            <img class="w-40" :src="getImage(produc.poster_path)" :alt="produc.original_title" />
          </li>
      </ul>
  </div>
</template>
