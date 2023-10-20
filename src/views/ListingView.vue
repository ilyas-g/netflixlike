<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import { ref, watchEffect } from 'vue';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_GRAY_TOKEN}`
  }
};

function getImage(imagePath: string) {
  const baseURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  return baseURL + imagePath;
}

const branches:any = ref([
  { id: 28, title: 'Action' },
  { id: 16, title: 'Animation' },
  { id: 12, title: 'Aventure' },
  { id: 35, title: 'Comédie' },
  { id: 99, title: 'Documentaire' }
])

const currentBranch = ref(branches[0])
const datas:any = ref({})

const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=`
watchEffect(async () => {
  const response = await fetch(
    `${API_URL}${currentBranch.value}`, options
  )
  datas.value = await response.json()
})
</script>

<template>
    <div>
        <h1 class="text-5xl">ListingView</h1>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <BaseTabs v-for="branch in branches" :title="branch.title" :tabNumber="branch.id" @some-event="() => {currentBranch = branch.id}" />
          </ul>
        </div>
        <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="(movie, index) in datas.results" :key="movie.id">

          <BaseCard
          :index="movie.id"
          :title="movie.original_title" 
          :imgSrc="getImage(movie.poster_path)"
          :overview="movie.overview" />

      </template>
    </div>
    </div>
</template>
