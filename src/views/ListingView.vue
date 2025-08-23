<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import { options, getImage } from '@/utils/utils.js'
import { ref, watchEffect} from 'vue';

import { useBookmarksStore } from '@/stores/bookmark'

interface thing {
  id: number,
  title: string
};

const branches: thing[] = [
  { id: 28, title: 'Action' },
  { id: 16, title: 'Animation' },
  { id: 12, title: 'Aventure' },
  { id: 35, title: 'Comédie' },
  { id: 36, title: 'Histoire' }
];
const currentBranch = ref(branches[4].id)
const datas:any = ref({})
const pageNumber = ref(2);


const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=`
const tf = `&page=`
watchEffect(async () => {
  const response = await fetch(
    `${API_URL}${currentBranch.value}${tf}${pageNumber.value}`, options
  )
  datas.value = await response.json()
  console.log(datas.value)
})

const bookmark = useBookmarksStore()
</script>

<template>
    <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <BaseTabs 
            v-for="branch in branches" 
            :title="branch.title" 
            :tabNumber="branch.id" 
            :active-tab="currentBranch === branch.id ? true : false"
            @some-event="() => {currentBranch = branch.id}" 
            />
          </ul>
        </div>

        <div class="pagination" v-for="n in datas.total_pages">
          <template v-if="n <=500">
            <button @click="pageNumber = n">{{ n }}</button>
          </template>
        </div>
        <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="(movie) in datas.results" :key="movie.id">
        <BaseCard
        :index="movie.id"
        :title="movie.original_title" 
        :imgSrc="getImage(movie.poster_path)"
        @toggleBookmark="bookmark.addMovie(movie.original_title, getImage(movie.poster_path))" 
        />
      </template>
    </div>
    </div>
</template>
