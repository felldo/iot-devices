<script setup lang="ts">
import {motionSensors} from "~/service/MotionSensors";

</script>

<template>
  <BaseDeviceTable :data="motionSensors"/>
</template>

<style scoped>

</style>