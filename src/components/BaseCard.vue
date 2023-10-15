<template>
    <figure class="w-100 mb-3 bg-slate-100 rounded-md dark:bg-slate-800">
        <img class="mx-auto rounded-md" :src="imgSrc" alt="">
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
