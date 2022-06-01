<template>
  <span v-if="!isAvailableSlot">
    <a href="#" role="button" data-bs-toggle="tooltip">
      <img :src="userAvatar" />
    </a>
  </span>

  <span v-else>
    <a
      role="button"
      data-bs-toggle="popover"
      :title="user ? user.full_name : null"
      @click="bookSlot()"
      @mouseover="iconStatus = true"
      @mouseleave="iconStatus = !iconStatus"
    >
      <span v-if="iconStatus && !slotStatus">
        <add-icon />
      </span>
      <span v-else-if="iconStatus && slotStatus && checkPermissions">
        <sign-in-icon />
      </span>
      <span v-else-if="!iconStatus && !slotStatus">
        <empty-slot-icon />
      </span>
      <span v-else>
        <img :src="userAvatar" id="user_img" />
      </span>
    </a>
  </span>
</template>

<script>
import EmptySlotIcon from "../Icons/EmptySlotIcon.vue";
import AddIcon from "../Icons/AddIcon.vue";
import SignInIcon from "../Icons/SignInIcon.vue";
import TestUserIcon from "../Icons/TestUserIcon.vue";
import { doBookSlot, doClearSlot } from "../../store/userActions.js";

export default {
  components: {
    TestUserIcon,
    AddIcon,
    SignInIcon,
    EmptySlotIcon,
  },
  props: {
    colId: Number,
    rowId: Number,
    user: Object,
  },

  data() {
    return {
      slotStatus: Boolean(this.user),
      iconStatus: false,
      currentUser: JSON.parse(localStorage.getItem("user")),
    };
  },

  methods: {
    isAvailableSlot() {
      return !Boolean(this.user);
    },
    bookSlot() {
      if (this.slotStatus) {
        if (this.checkPermissions) {
          doClearSlot(this.currentUser, this.colId, this.rowId);
          this.slotStatus = !this.slotStatus;
        } else {
          console.log("this isn't your slot");
        }
      } else {
        doBookSlot(this.currentUser, this.colId, this.rowId)
        this.slotStatus = !this.slotStatus;
      }
    },
  },
  computed: {
    userAvatar() {
      return this.user
        ? `https://isu.ifmo.ru/userpics/${this.user.username}`
        : `https://isu.ifmo.ru/userpics/${this.currentUser.username}`;
    },
    checkPermissions() {
      return this.user
        ? this.user.username === this.currentUser.username
        : false;
    },
  },
};
</script>

<style>
#user_img {
  width: 90px;
  height: 90px;
  margin: 5px;
  border-radius: 90px;
  border: 3px solid var(--primary-color-blue);
}
</style>
