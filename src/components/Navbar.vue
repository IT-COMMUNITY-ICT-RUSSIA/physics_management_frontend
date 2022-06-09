<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center align-self-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        @click="goHome"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <Logo id="clickable" :width="80" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a
            id="clickable"
            @click="goHome"
            class="nav-link px-2 active"
            aria-current="page"
            >Замеры</a
          >
        </li>
        <li>
          <a id="clickable" @click="goAbout" class="nav-link px-2">О нас</a>
        </li>
        <li>
          <a id="clickable" @click="goMe" class="nav-link px-2">Профиль</a>
        </li>
      </ul>
      <div class="col-md-3 text-end">
        <UserInfoNew />
      </div>
    </header>
  </div>
</template>

<script>
import Logo from "./Icons/Logo.vue";
import UserInfoNew from "./UserInfoNew.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    UserInfoNew,
  },
  methods: {
    goAbout() {
      this.$router.replace({ path: "/about" });
    },
    goMe() {
      this.$router.replace({ path: "/me" });
    },
    goHome() {
      this.$router.replace({ path: "/" });
    },
  },
};
</script>

<style>
#clickable {
  cursor: pointer;
}
</style>
