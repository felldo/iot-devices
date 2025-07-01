<script setup lang="ts">
import type {BaseDevice} from "~/types/BaseDevice";
import {FilterMatchMode} from "@primevue/core";

const props = defineProps<{
  data: BaseDevice[];
}>();

const filters = ref({
  connectivity: {value: null, matchMode: FilterMatchMode.CONTAINS},
  powerSupply: {value: null, matchMode: FilterMatchMode.CONTAINS},
  brand: {value: null, matchMode: FilterMatchMode.EQUALS},
  name: {value: null, matchMode: FilterMatchMode.CONTAINS}
});
</script>

<template>
  <DataTable :value="props.data"
             tableStyle="min-width: 50rem"
             show-gridlines
             striped-rows
             v-model:filters="filters"
             filter-display="row"
             style="width: 90%"
             size="small">

    <Column field="brand" header="Brand" class="w-0 text-nowrap" :showFilterMenu="false">
      <template #filter="{ filterModel, filterCallback }">
        <Select v-model="filterModel.value"
                @change="filterCallback()"
                :options="[...new Set(props.data.map(item => item.brand))]"
                placeholder="Select One"
                class="w-full"
                filter
                :showClear="true">
          <template #option="slotProps">
            <Badge :value="slotProps.option"/>
          </template>
        </Select>
      </template>
    </Column>

    <Column field="name" header="Name" class="w-0 text-nowrap" :showFilterMenu="false">
      <template #filter="{ filterModel, filterCallback }">
        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by name"/>
      </template>
    </Column>

    <Column header="Image" style="width: 0;">
      <template #body="slotProps">
        <img :src="slotProps.data.image"
             class="w-10"
             v-tooltip="{ value: `<img src='${slotProps.data.image}' alt=''/>`, escape: false , showDelay: 500}"
             alt=""/>
      </template>
    </Column>

    <Column header="Website" class="w-0">
      <template #body="slotProps">
        <a :href="slotProps.data.website" target="_blank">
          Visit
        </a>
      </template>
    </Column>

    <Column header="Connectivity" :showFilterMenu="false" filterField="connectivity" class="w-0">
      <template #body="slotProps">
        <div class="grid gap-1">
          <ul v-for="(connectivity, index) in slotProps.data.connectivity" :key="index">
            <Badge :value="connectivity"/>
          </ul>
        </div>
      </template>

      <template #filter="{ filterModel, filterCallback }">

        <Select v-model="filterModel.value"
                @change="filterCallback()"
                :options="[...new Set(props.data.flatMap(item => item.connectivity))]"
                placeholder="Select One"
                class="w-full"
                filter
                :showClear="true">
          <template #option="slotProps">
            <Badge :value="slotProps.option"/>
          </template>
        </Select>

      </template>
    </Column>


    <Column header="Power Supply" :showFilterMenu="false" filterField="powerSupply" class="w-0">
      <template #body="slotProps">
        <ul v-for="(powerSupply, index) in slotProps.data.powerSupply" :key="index">
          <Badge :value="powerSupply"/>
        </ul>
      </template>

      <template #filter="{ filterModel, filterCallback }">

        <Select v-model="filterModel.value"
                @change="filterCallback()"
                :options="[...new Set(props.data.flatMap(item => item.powerSupply))]"
                placeholder="Select One"
                class="w-full"
                filter
                :showClear="true">
          <template #option="slotProps">
            <Badge :value="slotProps.option"/>
          </template>
        </Select>

      </template>
    </Column>

    <Column field="notes" header="Notes"/>

    <slot></slot>

    <template #footer> In total there are {{ data ? data.length : 0 }} products.</template>
  </DataTable>
</template>

<style scoped>

</style>