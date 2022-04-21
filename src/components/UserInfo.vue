<template>
  <div id="user_div">
    <table style="width: 100%;">
      <tr>
        <td style="width: 30%;">
          <img v-bind:src="avatar_link" id="user_img" alt=""/>
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
export default {
  props: {
    username: {
      type: String,
      default() {
        return "Default Name";
      },
    },
    isu_number: {
      type: String,
      default() {
        return "000000";
      },
    },
    avatar_link: {
      type: [String, null],
      default() {
        return "https://img.icons8.com/ios/100/000000/test-account.png";
      },
    },
  },
};
</script>

<style>
#user_div {
  width: 20em;
}

#user_img {
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 3px solid var(--primary-color-blue);
}

/*#user_img:hover {
  border: 5px solid var(--primary-color-red);
}*/

#user_td_name {
  width: 65%;
  text-align: left;
  font-size: x-large;
  vertical-align: top;
  color: var(--primary-color-light-gray);
  line-height: 1em;
}

h3 {
  font-size: larger;
  color: var(--main-font-color);
}
</style>
