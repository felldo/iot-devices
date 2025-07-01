<script setup lang="ts">
import {iotCategories} from "~/data/iotCategories";
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 p-4 gap-4" style="width: 55rem">
      <div v-for="category in iotCategories" :key="category.title">
        <CategoryCard :title="category.title"
                      :description="category.description"
                      :image="category.image"
                      :link="category.link"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>