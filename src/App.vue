<script>
import Login from "./components/Login.vue";

export default {
  components: { Login },
};
</script>

<template>
  <div class="container">
    <br />
    <div class="row justify-content-md-center">
      <div class="col-4 align-self-center">
        <div class="p-3 border bg-white">
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --main-font-color: #212121;
  --primary-color-dark-gray: #666666;
  --primary-color-gray: #c4c4c4;
  --primary-color-light-gray: #eeeeee;
  --primary-color-green: #4caf50;
  --primary-color-blue: #035dd8;
  --primary-color-red: #e74c3c;
}
</style>
