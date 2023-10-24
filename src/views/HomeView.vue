<script setup lang="ts">

import { ref } from 'vue';
import BaseCard from '@/components/BaseCard.vue'
import { options, getImage } from '@/utils/utils.js'
import { useBookmarksStore } from '@/stores/bookmark'

const movies: any = ref({});

async function getMoviesData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
  const finalRes = await res.json();
  console.log(finalRes);
  movies.value = finalRes;
}

getMoviesData()

const bookmark = useBookmarksStore()

</script>

<template>
  <div class="bg-[url('@/assets/bg-home.jpg')]">
    <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="(movie, index) in movies.results" :key="movie.id">
        <template v-if="index <=3">
          <BaseCard
          :title="movie.original_title" 
          :imgSrc="getImage(movie.poster_path)"
          @toggleBookmark="bookmark.addMovie(movie.original_title, getImage(movie.poster_path))" 

          />
        </template>
      </template>
    </div>
  </div>
</template>
