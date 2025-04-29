<template>
  <div>
<!--    <NuxtRouteAnnouncer/>-->
<!--    <NuxtWelcome/>-->

    <div class="card flex justify-center font-bold">
      Smart Devices Overview
    </div>

    <DatePicker v-model="date"/>

    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />


    <div style="background-color: blueviolet;" class="">
      fsadfasdf
    </div>


  </div>
</template>
<script setup>
import {ref} from "vue";

const date = ref();

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>

