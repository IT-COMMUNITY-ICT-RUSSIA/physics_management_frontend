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
      <schedule @loadTime="replaceTime" />
    </div>
    <div class="row">
      <p class="sub-h description" v-if="!scheduledTime">
        Нажмите на свободное место, чтобы записаться на соответствующую
        установку и время.
      </p>
      <p class="sub-h description" v-else>
        <b>Чтобы отменить запись, нажмите на свой аватар.</b> После этого ваше
        место будет доступно для записи другим студентам. Вам
        <b>будет доступна</b> запись на другое время.
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
        <button class="btn btn-primary" v-else @click="goToEngine">
          Перейти к замерам
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Schedule from "../components/Schedule/Schedule.vue";
import UserInfo from "../components/UserInfo.vue";
import { useToast } from "vue-toastification";
import router from "../routing";

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
    goToEngine() {
      router.replace({ path: "/engine" });
    },
    showInfo() {
      const toast = useToast();
      toast.info(
        `Уже можно перейти к замерам, поторопитесь! В ${
          this.scheduledTime + 1
        }:00 ваша запись закроется`
      );
    },
  },
  updated() {
    if (this.$dayjs().hour() === this.scheduledTime) {
      this.showInfo();
    }
    console.log(this.$dayjs().hour());
    console.log(this.scheduledTime);
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
