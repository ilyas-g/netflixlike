<template>
    <header>
        <h1 class="green">{{ headerTest }}</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/listing">Listing</router-link>
        <router-link to="/bookmarks">Bookmarks</router-link>
    </header>
</template>
<script setup lang="ts">
defineProps<{
  headerTest: string
}>()
</script>
<style lang="">
    
</style>
