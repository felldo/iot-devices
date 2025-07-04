<script setup lang="ts">
import {motionSensors} from "~/data/devices/MotionSensors";

</script>

<template>
  <BaseDeviceTable :data="motionSensors"/>
</template>

<style scoped>

</style>