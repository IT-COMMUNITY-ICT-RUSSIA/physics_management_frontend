<template>
  <div v-for="i in [1, 2, 3, 4]" :key="i">
    <schedule-row :time="i + ' Час'" />
  </div>
</template>

<script>
import ScheduleRow from "./ScheduleRow.vue";

export default {
  components: {
    ScheduleRow,
  },
};
</script>

<style></style>
