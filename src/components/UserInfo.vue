<template>
  <!-- Дописать компонент -->
  <p>Информация о пользователе</p>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default() {
        return "User";
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
        return null;
      },
    },
  },
};
</script>

<style></style>
