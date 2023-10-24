<template>
    <div class="p-5">
        <h1 class="text-6xl">BooksmarksView</h1>
        <div>
            <h2 class="text-4xl my-5">What is a Store?</h2>
            <p>A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree. 
                In other words, it hosts global state. It's a bit like a component that is always there and that everybody can read off and write to. 
            </p>
            <p class="text-red-400">It has three concepts, the state, getters and actions and it's safe to assume these concepts are the equivalent of 
                data, computed and methods in components.
            </p>
        </div>
        <div>Current Count: {{ counter.count }}</div>
        <div>Current Count: {{ counter.doubleCount }}</div>
        <button @click="counter.randomizeCounter()">Randomize</button>

        <div>{{ bookmark.userList }}</div>
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

import { options, getImage } from '@/utils/utils.js'

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
