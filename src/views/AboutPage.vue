<template>
  <div class="container">
    <div class="row">
      <user-info />
    </div>
    <div class="row">
      <p class="h-custom">Запись</p>
    </div>
    <div class="row">
      <p class="sub-h">
        Статус: <a class="inactive">не записан</a> или
        <a class="active">запись на {{ scheduledTime }}</a>
      </p>
    </div>
    <div class="row">
      <schedule />
    </div>
    <div class="row">
      <p class="sub-h description">
        Нажмите на свободное место, чтобы записаться на соответствующую
        установку и время.
      </p>
    </div>
    <div class="row text-center align-middle">
      <div class="col">
        <button
          type="button"
          class="btn btn-secondary text-uppercase text-wrap"
          v-if="counting"
        >
          Откроется через
          <vue-countdown
            :time="20 * 1000"
            @end="stopCountdown"
            v-slot="{ minutes, seconds }"
          >
            {{ normalizeTime(minutes) }}:{{ normalizeTime(seconds) }}
          </vue-countdown>
        </button>
        <button class="btn btn-primary" v-else>Перейти к записи</button>
      </div>
    </div>
  </div>
</template>

<script>
import Schedule from "../components/Schedule/Schedule.vue";
import UserInfo from "../components/UserInfo.vue";

export default {
  components: {
    UserInfo,
    Schedule,
  },
  methods: {
    normalizeTime(time) {
      return time < 10 ? "0" + time : time;
    },
    stopCountdown() {
      this.counting = false;
    },
  },
  data() {
    return {
      scheduledTime: "12:00",
      counting: true,
    };
  },
};
</script>

<style scoped>
.h-custom {
  color: var(--main-font-color);
  font-size: 24px;
}
.sub-h {
  color: var(--main-font-color);
  font-size: 16px;
}
.inactive {
  color: var(--primary-color-red);
  text-decoration: none;
}
.description {
  color: var(--primary-color-gray);
}
.active {
  color: inherit;
  text-decoration: none;
}
.btn-secondary {
  color: var(--primary-color-dark-gray);
  background-color: var(--primary-color-light-gray) !important;
}
</style>
