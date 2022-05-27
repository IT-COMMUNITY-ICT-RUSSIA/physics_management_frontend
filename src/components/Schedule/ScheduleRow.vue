<template>
  <tr>
    <th class="lead text-center" scope="row">
      <div class="text-available" v-if="isAvailable">{{ range }}</div>
      <div v-else>{{ range }}</div>
    </th>
    <td v-for="i in [0, 1, 2]" :key="i">
      <span v-for="colId in [0, 1]" :key="colId">
        <schedule-slot
          :colId="colId + i * 2"
          :rowId="rowId"
        ></schedule-slot>
      </span>
    </td>
  </tr>
</template>

<script>
import ScheduleSlot from "./ScheduleSlot.vue";
import TestUserIcon from "../Icons/TestUserIcon.vue";

export default {
  components: { ScheduleSlot, TestUserIcon },
  props: {
    rowId: Number,
    rowData: Object,
  },
  computed: {
    isAvailable() {
      return this.$dayjs().hour() + this.rowId === this.$dayjs().hour();
    },
    range() {
      return (
        ((this.$dayjs().hour() + this.rowId) % 24) +
        ":00" +
        " - " +
        ((this.$dayjs().hour() + this.rowId + 1) % 24) +
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
