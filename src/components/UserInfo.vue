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
            @click="doLogout"
          />
        </td>
        <td style="width: 5%"></td>
        <span v-if="isUserLogged">
          <td id="user_td_name">
            <h3>{{ loggedUser.full_name }}</h3>
            {{ loggedUser.username }}
            <a @click="doLogout" href=""> Выйти </a>
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
import TestUserIcon from "./Icons/TestUserIcon.vue";

export default {
  components: { TestUserIcon },
  methods: {
    doLogout() {
      localStorage.clear();
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
  height: auto;
  border-radius: 90px;
  border: 3px solid var(--primary-color-blue);
}

/*#user_img:hover {
  border: 5px solid var(--primary-color-red);
}*/

#user_td_name {
  width: 65%;
  text-align: left;
  font-size: 20px;
  vertical-align: top;
  line-height: 1em;
}

h3 {
  font-size: 24px;
  color: var(--main-font-color);
}
</style>
