<template>
  <form>
    <div class="mb-3">
      <p class="text-center fs-4">Physics MVP</p>
    </div>
    <div class="mb-3">
      <label for="login" class="form-label fs-5">Имя пользователя</label>
      <input class="form-control is-invalid" id="login" v-model="loginInput" />
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Неверное имя пользователя.
      </div>
    </div>
    <div class="mb-3">
      <label for="pass" class="form-label fs-5">Пароль</label>
      <input
        type="password"
        class="form-control"
        id="pass"
        v-model="passwordInput"
      />
      <a href="#" class="text-decoration-none fs-6">Забыли пароль?</a>
    </div>
    <div class="d-grid gap-2">
      <button type="submit" class="btn btn-primary">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      passwordInput: "",
      loginInput: "",
    };
  },
  methods: {
    authorize() {
      // #TODO: fetch server
    },
  },
};
</script>

<style>
form {
  background-color: white;
}
p {
  color: var(--main-font-color);
}
</style>
