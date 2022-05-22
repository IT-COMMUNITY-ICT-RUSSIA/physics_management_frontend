<template>
  <div id="user_div">
    <table style="width: 100%">
      <tr>
        <td style="width: 30%">
          <test-user-icon v-if="!isUserLogged" id="user_img" />
          <img
            v-else
            v-bind:src="avatar_link"
            id="user_img"
            alt=""
            @click="doLogout"
          />
        </td>
        <td style="width: 5%"></td>
        <span v-if="isUserLogged">
          <td id="user_td_name">
            <h3>{{ username }}</h3>
            {{ isu_number }}
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
      isUserLogged: localStorage.getItem("logged"),
      loggedUserID: localStorage.getItem("username"),
    };
  },
  props: {
    username: {
      type: String,
      default() {
        return "Студент физик";
      },
    },
    isu_number: {
      type: String,
      default() {
        return localStorage.getItem("username") || "307526";
      },
    },
    avatar_link: {
      type: String,
      default() {
        const isu_id = localStorage.getItem("username");
        return `https://isu.ifmo.ru/userpics/${isu_id}`;
      },
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
