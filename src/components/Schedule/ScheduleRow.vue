<template>
  <!-- <schedule-slot /> -->
  <tr>
    <th class="lead" scope="row">{{ this.time }}</th>
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
    time: String,
  },
};
</script>

<style scoped>
.icon {
  width: 90px;
  height: auto;
}
</style>
