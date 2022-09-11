<template>
  <img :width="width" src="/logo.png" />
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String, null],
      default() {
        return 300;
      },
    },
  },
};
</script>

<style scoped></style>
