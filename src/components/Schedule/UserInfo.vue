<template>
  <div id="user_div">
    <table style="width: 100%">
      <tr>
        <td style="width: 30%">
          <test-user-icon v-if="!isUserLogged" id="user_img" />
          <img
            v-else
            v-bind:src="avatarLink"
            id="user_img"
            alt=""
            @click="Logout"
          />
        </td>
        <td style="width: 5%"></td>
        <span v-if="isUserLogged">
          <td id="user_td_name">
            <h3>{{ loggedUser.full_name }}</h3>
            {{ loggedUser.username }}
            <a id="logout" @click="Logout"> Выйти </a>
          </td>
        </span>
        <span v-else>
          <td id="user_td_name">
            <h3>Гость</h3>
            <a href="/login"> Войти </a>
          </td>
        </span>
      </tr>
    </table>
  </div>
</template>

<script>
import { doLogout } from "../store/userActions";
import TestUserIcon from "./Icons/TestUserIcon.vue";

export default {
  components: { TestUserIcon },
  methods: {
    Logout() {
      console.log("logout");
      doLogout();
    },
  },
  data() {
    return {
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
#user_div {
  width: 20em;
}

#user_img {
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border: 3px solid var(--primary-color-blue);
}

#user_td_name {
  text-align: left;
  font-size: 20px;
  line-height: 1em;
}

h3 {
  font-size: 24px;
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
