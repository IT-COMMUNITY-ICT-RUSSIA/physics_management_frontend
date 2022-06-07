<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center align-self-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <logo :width="80" />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" class="nav-link px-2 active" aria-current="page"
            >Замеры</a
          >
        </li>
        <li><a href="/about" class="nav-link px-2">О нас</a></li>
        <li><a href="/me" class="nav-link px-2">Профиль</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <user-info-new />
      </div>
    </header>
  </div>
  <div class="container">
    <div class="row">
      <p class="h-custom">Запись</p>
    </div>
    <div class="row">
      <p class="sub-h">
        Статус: <a v-if="!scheduledTime" class="inactive">не записан</a>
        <a v-else id="active">запись на {{ scheduledTime }}:00</a>
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
  <footer>
    <div class="divider"></div>
  </footer>
</template>

<script>
import Schedule from "../components/Schedule/Schedule.vue";
import UserInfo from "../components/UserInfo.vue";
import { useToast } from "vue-toastification";
import router from "../routing";
import Logo from "../components/Icons/Logo.vue";
import UserInfoNew from "../components/UserInfoNew.vue";

export default {
  components: {
    UserInfo,
    Schedule,
    Logo,
    UserInfoNew,
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
#active {
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
