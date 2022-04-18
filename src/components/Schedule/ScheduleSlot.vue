<template>
  <p>Слот в расписании</p>
</template>

<script>
export default {
  props: {
    user: [Object, null],
  },
  methods: {
    isAvailableSlot: () => {
      return !Boolean(this.user);
    },
  },
};
</script>

<style></style>
