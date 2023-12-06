<template>
    <div class="p-5">
        <div class="mx-auto grid grid-cols-4 gap-5 place-items-end h-56 mb-4 p-5">
            <template v-for="(movie) in bookmark.userList" :key="movie.name">
                <BaseCard
                :title="movie.name" 
                :imgSrc="getImage(movie.imgSrc)"
                @toggleBookmark="bookmark.deleteEvent(movie)" 

                />
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'

import { getImage } from '@/utils/utils.js'

import { useCounterStore } from '@/stores/counter'
import { useBookmarksStore } from '@/stores/bookmark'

const counter = useCounterStore()

// counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()


const bookmark = useBookmarksStore()

</script>
