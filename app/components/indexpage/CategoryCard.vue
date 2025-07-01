<script setup lang="ts">
const router = useRouter()
const handleClick = () => {
  router.push(props.link)
}
const props = defineProps<{
  title: string
  description: string
  image: string
  link: string
}>()

</script>

<template>
  <div class="card-button w-full" @click="handleClick">
    <Card>
      <!--<template #header>
        <img alt="Card" :src="props.image" class="w-full h-48 object-cover"/>
      </template>-->
      <template #title>
        <div class="flex justify-center">{{ props.title }}</div>
      </template>
      <template #content>
        <div class="flex justify-center items-center h-20 overflow-auto">
          <p class="text-center">{{ props.description }}</p>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.card-button {
  cursor: pointer;
  display: inline-block;
  transition: transform 0.1s ease;
}

.card-button:hover {
  transform: scale(1.01);
}

.card-button:active {
  transform: scale(0.99);
}
</style>