<script setup lang="ts">

import { ref } from 'vue';
import BaseCard from '@/components/BaseCard.vue'

const token = import.meta.env.VITE_GRAY_TOKEN;

const movies: any = ref({});

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

async function getMoviesData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
  const finalRes = await res.json();
  console.log(finalRes);
  movies.value = finalRes;
}

getMoviesData()
</script>

<template>
  <div class="bg-[url('@/assets/bg-home.jpg')]">
    <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="movie in movies.results.slice(0, 4)" :key="movie.id">
          <BaseCard 
          :title="movie.original_title" 
          :imgSrc="getImage(movie.poster_path)"
          :overview="movie.overview" />
      </template>
    </div>
  </div>
</template>
