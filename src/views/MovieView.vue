<template>
    <div>
        <h1>{{ movie.original_title }}</h1>

        <p>{{ movie.overview }}</p>

        <img :src="getImage(defaultIMGG, movie.poster_path)" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { options, getImage } from '@/utils/utils.js'

const movie: any = ref({});
const defaultIMGG = 'https://lecoledugameplay.fr/wp-content/uploads/2025/08/arktall.jpg'

async function getMoviesData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/623?language=en-US', options);
  const finalRes = await res.json();
  console.log(finalRes);
  movie.value = finalRes;
}

getMoviesData()

</script>
<style lang="">

</style>
