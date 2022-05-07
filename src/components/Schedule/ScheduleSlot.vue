<template>
  
  <span v-if="!isAvailableSlot" title="Фамилия Имя Отчество">
    <a href="#" role="button" data-bs-toggle="tooltip">
      <test-user-icon />
    </a>
  </span>

  <span v-else-if="slot_status">
    <a
      role="button"
      data-bs-toggle="popover"
      title= "Фамилия Имя Отчество"
      @click="slot_status=false"
      @mouseover="icon_status = true"
      @mouseleave="icon_status = false"
    >
      <span v-if="icon_status">
        <sign-in-icon />
      </span>
      <span v-else>
        <test-user-icon id="user_img" />
      </span>
    </a>
  </span>

  <span v-else>
    <a
      role="button"
      data-bs-toggle="popover"
      @click="slot_status=true"
      @mouseover="icon_status=true"
      @mouseleave="icon_status = false"
    >
      <span v-if="icon_status">
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
import username from "../UserInfo.vue"
export default {
  components: {
    TestUserIcon,
    AddIcon,
    SignInIcon,
    EmptySlotIcon,
    username,
  },
  props: {
    user: [Object, null],
  },

  data() {
    return {
      slot_status: false,
      icon_status: false,
    };
  },

  methods: {
    isAvailableSlot: () => {
      return !Boolean(this.user);
    },

  },
};
</script>

<style>
#user_img {
  width: 90px;
  height: auto;
  border-radius: 90px;
  border: 3px solid var(--primary-color-blue);
}
</style>
