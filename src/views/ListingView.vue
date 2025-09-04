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
const currentBranch = ref(branches[0].id)
const datas:any = ref({})
const pageNumber = ref(100);
const limitPage:number = 100 // limité à 500

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


function shouldShowPageInMenu(page:number) {
  return (isCurrentPage(page) || isNextOrPreviousPage(page) || isFirstOrLastPage(page))
}

function isCurrentPage(page:number) {
  if(page === pageNumber.value) {
    return true
  }
}

function isNextOrPreviousPage(page:number) {
  const current = pageNumber.value
	if(page+1 === current || page-1 === current) {
    return true
  }
}

function isFirstOrLastPage(page:number) {
  if(page === 1 || page === 2 || page === limitPage || page === limitPage-1) {
    return true
  }
}

function previous() {
  if(pageNumber.value > 1) {
    pageNumber.value = pageNumber.value - 1
  }
}

function next() {
  if(pageNumber.value < limitPage) {
    pageNumber.value = pageNumber.value + 1
  }
}

import defaultImg from "@/assets/image-non-trouvee.webp";
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

        <ul class="pagination">
          <li @click="previous">&laquo;</li>
          <template v-for="n in datas.total_pages" :key="n">
            <template v-if="n <=limitPage">
              <li @click="pageNumber = n"
              :class="{current: pageNumber === n, hide: !shouldShowPageInMenu(n)}"
              >{{ n }}</li>
            </template>
          </template>
          <li @click="next">&raquo;</li>
        </ul>
        <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
      <template v-for="(movie) in datas.results" :key="movie.id">
        <div v-if="movie.poster_path === null"
        class="panelNoneImage w-100 mb-3 bg-slate-100 rounded-md dark:bg-slate-800 relative bg-gradient-to-r from-indigo-500">
          <h2>{{ movie.original_title }}</h2>
        </div>
        <BaseCard v-else
        :index="movie.id"
        :title="movie.original_title" 
        :imgSrc="getImage(defaultImg, movie.poster_path)"
        :alt="movie.original_title"
        @toggleBookmark="bookmark.addMovie(movie.original_title, getImage(defaultImg, movie.poster_path))" 
        />
      </template>
    </div>
    </div>
</template>
