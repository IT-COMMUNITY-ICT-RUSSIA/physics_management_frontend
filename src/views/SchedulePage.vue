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
        Статус: <a v-if="!scheduledTime" class="inactive">не записан</a>
        <a v-else class="active">запись на {{ scheduledTime }}:00</a>
      </p>
    </div>
    <div class="row">
      <schedule :onLoad="replaceTime" />
    </div>
    <div class="row">
      <p class="sub-h description">
        Нажмите на свободное место, чтобы записаться на соответствующую
        установку и время.
      </p>
    </div>
    <div class="row text-center align-middle">
      <div class="col" v-if="scheduledTime">
        <button
          type="button"
          class="btn btn-secondary text-uppercase text-wrap"
          v-if="new Date().getHours() !== scheduledTime"
        >
          Откроется в {{ scheduledTime }}:00
        </button>
        <button class="btn btn-primary" v-else>Перейти к замерам</button>
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
    replaceTime(time) {
      this.scheduledTime = this.$dayjs().hour() + time;
    },
  },
  data() {
    return {
      scheduledTime: null,
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
  color: var(--primary-color-gray);
  text-decoration: none;
}
.description {
  color: var(--primary-color-gray);
}
.active {
  color: var(--primary-color-red);
  text-decoration: none;
}
.btn-secondary {
  color: var(--primary-color-dark-gray);
  background-color: var(--primary-color-light-gray) !important;
}

#logo-itmo {
  width: 150px;
  align-content: right;
}
</style>
