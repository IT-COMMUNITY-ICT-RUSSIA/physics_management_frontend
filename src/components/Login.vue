<template>
  <span id="background">
    <div class="mb-3 text-center">
      <img src="logo.png" id="logo">
    </div>
    <div class="mb-3">
      <label for="login" class="form-label fs-5">Имя пользователя</label>
      <input
        :class="{ 'form-control': true, 'is-invalid': retryEnter }"
        id="login"
        v-model="loginInput"
      />
    </div>
    <div class="mb-3">
      <label for="pass" class="form-label fs-5">Пароль</label>
      <input
        type="password"
        :class="{ 'form-control': true, 'is-invalid': retryEnter }"
        id="pass"
        v-model="passwordInput"
      />
      <a href="#" class="text-decoration-none fs-6">Забыли пароль?</a>
      <div
        v-if="retryEnter"
        id="validationServerUsernameFeedback"
        :class="{ 'invalid-feedback': retryEnter }"
        class="text-center"
      >
        Неправильный логин или пароль. Попробуйте снова
      </div>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary" @click="authorize">Войти</button>
    </div>
  </span>
</template>

<script>
import { doLoginServer } from "../store/userActions";
import router from "../routing";
import { useToast } from "vue-toastification";

export default {
  setup() {
    if (localStorage.getItem("token")) {
      router.replace({ path: "/" });
    }
  },
  mounted() {
    this.showHint();
  },
  data() {
    return {
      passwordInput: "",
      loginInput: "",
      retryEnter: false,
    };
  },
  methods: {
    showHint() {
      const toast = useToast();
      toast.info(
        "ВНИМАНИЕ! Это тестовая версия системы. Для входа введите свой номер ISU и пароль testing"
      );
    },
    authorize() {
      this.showHint();
      this.passwordInput &&
        this.loginInput &&
        doLoginServer(this.loginInput, this.passwordInput).then(() => {
          if (localStorage.getItem("token")) {
            this.retryEnter = false;
            router.replace({ path: "/" });
            setTimeout("document.location.reload();", 100);
          } else {
            this.retryEnter = true;
          }
        });
    },
  },
};
</script>

<style>
#background {
  background-color: white;
}
p {
  color: var(--main-font-color);
}
#logo {
  width: 150px;
}
</style>
