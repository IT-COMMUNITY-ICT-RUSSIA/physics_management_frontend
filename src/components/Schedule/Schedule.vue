<template>
  <!-- <div v-for="i in [1, 2, 3, 4]" :key="i">
    <schedule-row :time="i + ' Час'" />
  </div> -->
  <table class="table table-borderless text-center">
    <thead>
      <tr>
        <th scope="col" class="lead text-capitalize">
          <left-arrow-icon class="arrow" />
          <a>{{ today }}</a>
          <right-arrow-icon class="arrow" />
        </th>
        <th scope="col" class="lead">Установка №1</th>
        <th scope="col" class="lead">Установка №2</th>
        <th scope="col" class="lead">Установка №3</th>
      </tr>
    </thead>
    <schedule-row :time="i + ' Час'" v-for="i in [1, 2, 3, 4]" :key="i" />
  </table>
</template>

<script>
import ScheduleRow from "./ScheduleRow.vue";
import RightArrowIcon from "../Icons/RightArrowIcon.vue";
import LeftArrowIcon from "../Icons/LeftArrowIcon.vue";

export default {
  components: {
    ScheduleRow,
    RightArrowIcon,
    LeftArrowIcon,
  },
  data() {
    return {
      today: this.$dayjs(Date()).format("MMMM DD"),
    };
  },
};
</script>

<style>
th {
  font-size: 24px;
  text-decoration: none;
}
.arrow {
  width: 24px;
  padding-bottom: 2px;
}
</style>
