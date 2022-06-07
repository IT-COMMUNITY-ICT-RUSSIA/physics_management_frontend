<template>
  <header class="text-center">
    <logo @click="redirectHome" id="clickable" />
    <h1>404</h1>
    <h2>Упс... Вы попали куда-то не туда</h2>
  </header>
  <body class="text-center">
    <p>Страница не найдена</p>
    <p>Вы можете вернуться на <a id="home" @click="redirectHome">главную</a></p>
  </body>
</template>

<script>
import Logo from "../components/Icons/Logo.vue";
import router from "../routing";
export default {
  components: {
    Logo,
  },
  methods: {
    redirectHome() {
      router.replace({ path: "/" });
    },
  },
};
</script>

<style scoped>
#clickable:hover {
  cursor: pointer;
}
#home {
  text-decoration-line: underline;
  color: black;
}
#home:hover {
  color: blueviolet;
  cursor: grab;
}
</style>
