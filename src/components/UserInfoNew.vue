<template>
  <div class="containter">
    <test-user-icon
      v-if="!isUserLogged"
      id="user_img"
      title="Нажмите для авторизации"
      @click="Login"
    />
    <a
      v-else
      @click="Logout"
      @mouseover="onHover = true"
      @mouseleave="onHover = false"
      :title="loggedUser.full_name"
    >
      <img v-if="!onHover" v-bind:src="avatarLink" id="user_img" />
      <img id="user_img" v-else :src="'remove.png'" />
    </a>
  </div>
</template>

<script>
import { doLogout } from "../store/userActions.js";
import TestUserIcon from "./Icons/TestUserIcon.vue";

export default {
  name: "UserInfoNew",
  components: { TestUserIcon },
  methods: {
    Logout() {
      console.log("logout");
      doLogout();
    },
    Login() {
      this.$router.replace({ path: "/login" });
    },
  },
  data() {
    return {
      onHover: false,
      isUserLogged: Boolean(localStorage.getItem("user")),
      loggedUser: JSON.parse(localStorage.getItem("user")),
    };
  },
  computed: {
    avatarLink() {
      return `https://isu.ifmo.ru/userpics/${this.loggedUser.username}`;
    },
  },
};
</script>

<style scoped>
#user_img {
  width: 70px;
  height: 70px;
  border-radius: 90px;
  border: 2px solid var(--primary-color-blue);
}

#user_td_name {
  font-size: 20px;
  line-height: 1em;
  color: var(--primary-color-gray);
}

h3 {
  font-size: 20px;
  color: var(--main-font-color);
}

#logout {
  text-decoration-line: underline;
  color: black;
}
#logout:hover {
  color: blueviolet;
  cursor: grab;
}

#logo {
  width: 150px;
}
</style>
