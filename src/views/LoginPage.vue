<template>
  <div class="container-fluid">
    <br />
    <div class="row d-flex justify-content-center">
      <div class="col-xs-2 col-md-6 col-sm-6 col-lg-4 align-self-center">
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
