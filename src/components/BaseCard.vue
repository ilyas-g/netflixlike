<template>
    <figure class="w-100 mb-3 bg-slate-100 rounded-md dark:bg-slate-800 relative bg-gradient-to-r from-indigo-500">
        <img class="mx-auto rounded-md" :src="imgSrc" alt="">
        <div class="absolute top-0 right-0 fill-red-500 hover:fill-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="h-10 w-10" viewBox="0 0 17 15" style="enable-background:new 0 0 15 15"><path d="M13.91 6.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 12.06 2.26 9 1.09 6.75-1.48 1.8 5-1.5 7.5 3.45c2.5-4.95 8.98-1.65 6.41 3.3z"/></svg>
        </div>
    </figure>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  imgSrc: string
  overview: string
}>()
</script>
<style>

</style>
