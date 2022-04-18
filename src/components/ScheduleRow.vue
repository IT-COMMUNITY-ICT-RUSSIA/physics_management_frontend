<template>
  <p>{{ this.time }}:</p>
  <schedule-slot />
</template>

<script>
import ScheduleSlot from "./ScheduleSlot.vue";

export default {
  components: { ScheduleSlot },
  props: {
    time: String,
  },
};
</script>

<style></style>
