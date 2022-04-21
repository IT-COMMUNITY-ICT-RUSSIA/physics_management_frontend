<template>
  <!-- <schedule-slot /> -->

  <tr>
    <th class="lead text-center" scope="row">
      <div class="text-available" v-if="isAvailable">{{ range }}</div>
      <div v-else>{{ range }}</div>
    </th>
    <td v-for="i in [1, 2, 3]" :key="i">
      <test-user-icon class="icon" />
      <test-user-icon class="icon" />
    </td>
  </tr>
</template>

<script>
import ScheduleSlot from "./ScheduleSlot.vue";
import TestUserIcon from "../Icons/TestUserIcon.vue";

export default {
  components: { ScheduleSlot, TestUserIcon },
  props: {
    time: Number,
  },
  computed: {
    isAvailable() {
      return this.$dayjs().hour() + this.time - 1 === this.$dayjs().hour();
    },
    range() {
      return (
        ((this.$dayjs().hour() + this.time - 1) % 24) +
        ":00" +
        " - " +
        ((this.$dayjs().hour() + this.time) % 24) +
        ":00"
      );
    },
  },
};
</script>

<style scoped>
.icon {
  width: 90px;
  height: auto;
}
.text-available {
  color: var(--primary-color-blue) !important;
}
</style>
