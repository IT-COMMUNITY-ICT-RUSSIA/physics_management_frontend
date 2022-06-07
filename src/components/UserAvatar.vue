<template>
  <img
    :src="picUrl"
    :style="{ width: size + 'px', height: size + 'px' }"
    id="user_img"
  />
</template>

<script>
export default {
  props: {
    isuNumber: String,
    size: String,
  },
  computed: {
    picUrl() {
      return `https://isu.ifmo.ru/userpics/${this.isuNumber}`;
    },
  },
};
</script>

<style>
#user_img {
  border-radius: auto;
  border: 2px solid var(--primary-color-blue);
}
</style>
