<template>
  <span v-if="error">
    <div class="text-center">
      Ошибка при обращении к серверу, попробуйте позже
    </div>
  </span>
  <table
    class="table table-borderless table-hover text-center align-middle"
    v-else
  >
    <thead>
      <tr>
        <th scope="col" class="lead text-capitalize">
          <left-arrow-icon class="arrow" @click="decrementDate()" />
          <a>{{ currentDate }}</a>
          <right-arrow-icon class="arrow" @click="incrementDate()" />
        </th>
        <th scope="col" class="lead">Установка №1</th>
        <th scope="col" class="lead">Установка №2</th>
        <th scope="col" class="lead">Установка №3</th>
      </tr>
    </thead>
    <tbody>
      <schedule-row
        v-for="el in board"
        :key="el"
        :rowData="el[1]"
        :rowId="Number(el[0])"
      />
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from "./ScheduleRow.vue";
import RightArrowIcon from "../Icons/RightArrowIcon.vue";
import LeftArrowIcon from "../Icons/LeftArrowIcon.vue";
import { doFetchBoard, doFetchMe } from "../../store/userActions";

export default {
  components: {
    ScheduleRow,
    RightArrowIcon,
    LeftArrowIcon,
  },
  // props: {
  //   onLoad: Function,
  // },
  emits: ["loadTime"],
  methods: {
    incrementDate() {
      this.today = this.today.add(1, "d");
    },
    decrementDate() {
      console.log(this.today);
      this.today = this.today.add(-1, "d");
    },
  },
  data() {
    return {
      today: this.$dayjs(Date()),
      board: [],
      error: null,
      booking: null,
    };
  },
  created() {
    this.board = [];
    !this.error &&
      doFetchBoard()
        .then((data) => {
          this.board = Object.entries(data.board);
        })
        .catch((e) => {
          console.log(e);
          this.error = e;
        });
    const me = doFetchMe();
    me
      ? me.then((data) => {
          this.booking = data.booking;
          console.log(Number(this.booking));
          this.booking !== null ? this.$emit("loadTime", Number(this.booking)) : null;
          console.log(data);
        })
      : null;
  },
  computed: {
    currentDate() {
      return this.today.format("DD MMMM");
    },
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
.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
