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
      <p class="sub-h inactive">
        Нажмите на свободное место, чтобы записаться на соответствующую установку
        и время.
      </p>
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
  data() {
    return {
      scheduledTime: "12:00",
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
  color: var(--primary-color-dark-gray);
  text-decoration: none;
}
.active {
  color: inherit;
  text-decoration: none;
}
</style>
