<template>
  <div id="user_div">
    <table style="width: 100%">
      <tr>
        <td style="width: 30%">
          <test-user-icon v-if="!avatar_link" id="user_img" />
          <img v-else v-bind:src="avatar_link" id="user_img" alt="" />
        </td>
        <td style="width: 5%"></td>
        <td id="user_td_name">
          <h3>{{ username }}</h3>
          {{ isu_number }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TestUserIcon from "./Icons/TestUserIcon.vue";
export default {
  components: { TestUserIcon },
  props: {
    username: {
      type: String,
      default() {
        return "Студент Физик";
      },
    },
    isu_number: {
      type: String,
      default() {
        return "307526";
      },
    },
    avatar_link: {
      type: String,
      default() {
        return "https://isu.ifmo.ru/userpics/307526";
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
  color: var(--primary-color-light-gray);
  line-height: 1em;
}

h3 {
  font-size: 24px;
  color: var(--main-font-color);
}
</style>
