<template>
  <div class="container-fluid">
    <br />
    <div class="row justify-content-md-center">
      <div class="col-sm-4 align-self-center">
        <div class="p-3 border bg-white">
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  components: { Login },
};
</script>

<style scoped>
/* .col-custom {
  min-width: inherit;
} */
</style>
