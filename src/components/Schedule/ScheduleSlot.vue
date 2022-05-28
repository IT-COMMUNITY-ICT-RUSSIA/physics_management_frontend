<template>
  <span v-if="!isAvailableSlot" title="Фамилия Имя Отчество">
    <a href="#" role="button" data-bs-toggle="tooltip">
      <test-user-icon />
    </a>
  </span>

  <span v-else-if="slotStatus">
    <a
      role="button"
      data-bs-toggle="popover"
      :title="user ? user.full_name : null"
      @click="slotStatus = false"
      @mouseover="iconStatus = true"
      @mouseleave="iconStatus = !iconStatus"
    >
      <span v-if="iconStatus">
        <sign-in-icon />
      </span>
      <span v-else>
        <img :src="userAvatar" v-if="currentUser" id="user_img" />
        <test-user-icon v-else />
      </span>
    </a>
  </span>

  <span v-else>
    <a
      role="button"
      data-bs-toggle="popover"
      @click="slotStatus = true"
      @mouseover="iconStatus = true"
      @mouseleave="iconStatus = !iconStatus"
    >
      <span v-if="iconStatus">
        <add-icon />
      </span>
      <span v-else>
        <empty-slot-icon />
      </span>
    </a>
  </span>
</template>

<script>
import EmptySlotIcon from "../Icons/EmptySlotIcon.vue";
import AddIcon from "../Icons/AddIcon.vue";
import SignInIcon from "../Icons/SignInIcon.vue";
import TestUserIcon from "../Icons/TestUserIcon.vue";

export default {
  components: {
    TestUserIcon,
    AddIcon,
    SignInIcon,
    EmptySlotIcon,
  },
  props: {
    id: Number,
    colId: Number,
    rowId: Number,
    user: Object,
  },

  data() {
    return {
      slotStatus: !this.isAvailableSlot(),
      iconStatus: false,
      currentUser: JSON.parse(localStorage.getItem("user")),
    };
  },

  methods: {
    isAvailableSlot() {
      return !Boolean(this.user);
    },
  },
  computed: {
    userAvatar() {
      return `https://isu.ifmo.ru/userpics/${this.currentUser.username}`;
    },
  },
};
</script>

<style>
#user_img {
  width: 100px;
  height: auto;
  border-radius: 90px;
  border: 3px solid var(--primary-color-blue);
}
</style>
