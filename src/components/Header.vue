<template>
    <header class="text-slate-900 dark:text-white bg-white dark:bg-black flex items-center">
        <!-- <h1 class="green">{{ headerTest }}</h1> -->
        <!-- <img class="w-40 ml-5" :src="myLogoSrc" alt="my-logo" />

        <nav class="flex justify-around ml-5">
            <router-link class="mr-2" to="/">Home</router-link>
            <router-link class="mr-2" to="/listing">Listing</router-link>
            <router-link class="mr-2" to="/bookmarks">Bookmarks</router-link>
        </nav> -->


        <nav class="flex items-center justify-between flex-wrap p-6 w-full">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class="w-40" :src="myLogoSrc" alt="my-logo" />
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-teal-200 hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-2xl lg:flex-grow">
                    <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">Home</router-link>
                    <router-link to="/listing" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">Listing</router-link>
                    <router-link to="/bookmarks" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">Bookmarks</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import myLogoSrc from "@/assets/logo.webp";

// defineProps<{
//   headerTest: string
// }>()
</script>
<style lang="">
    
</style>
