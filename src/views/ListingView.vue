<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import { ref } from 'vue';
const movies: any = ref({});
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_GRAY_TOKEN}`
  }
};
async function getMoviesData() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99', options);
  const finalRes = await res.json();
  console.log(finalRes);
  movies.value = finalRes;
}
function getImage(imagePath: string) {
  const baseURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  return baseURL + imagePath;
}
getMoviesData()

const posts = ref([
      { id: 28, titlee: 'Action' },
      { id: 16, titlee: 'Animation' },
      { id: 12, titlee: 'Aventure' },
      { id: 35, titlee: 'Comédie' },
      { id: 99, titlee: 'Documentaire' }
    ])
</script>

<template>
    <div>
        <h1 class="text-5xl">ListingView</h1>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <!-- <p>{{ post.titlee }}</p> -->
            <BaseTabs v-for="post in posts" :title="post.titlee" :tabNumber="post.id">{{ post.titlee }}</BaseTabs>
          </ul>
        </div>
        <!-- <BaseTabs title="mpm" :tabNumber=1>okolm</BaseTabs> -->
        <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="(movie, index) in movies.results" :key="movie.id">

          <BaseCard
          :title="movie.original_title" 
          :imgSrc="getImage(movie.poster_path)"
          :overview="movie.overview" />

      </template>
    </div>
    </div>
</template>
