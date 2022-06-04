<template>
  <div class="mb-3 text-center">
    <img src="logo.png" id="logo" />
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-auto align-self-center">
        <p class="h-custom text-center">
          Кто мы такие и что вообще тут забыли
          <br />
          Новая строка
          <br />
          <a id="change-text">
            {{ textItems[textIndex] }}
          </a>
          . Продолжение текста
          <br />
          Еще что-то про нас
          {{ textIndex }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    countTextIndex() {
        setTimeout(() => {
          this.textIndex = (this.textIndex+1)%3;
          this.countTextIndex();
        }, 2000);
    },
  },
  data() {
    return {
      textIndex: 0,
      textItems: ["Вариант 1", "Вариант 2", "Вариант 3"],
    };
  },
  created: function () {
    this.countTextIndex();
  },
};
</script>

<style scoped>
.h-custom {
  color: var(--main-font-color);
  font-size: 36px;
}
#change-text {
  color: #2e4ba5;
  /* color: var(--primary-color-blue); */
  font-size: 36px;
}
.sub-h {
  color: var(--main-font-color);
  font-size: 16px;
}
.inactive {
  color: var(--primary-color-red);
  text-decoration: none;
}
.description {
  color: var(--primary-color-gray);
}
.active {
  color: inherit;
  text-decoration: none;
}
.btn-secondary {
  color: var(--primary-color-dark-gray);
  background-color: var(--primary-color-light-gray) !important;
}

#logout {
  text-decoration-line: underline;
  color: black;
}
#logout:hover {
  color: blueviolet;
  cursor: grab;
}

#logo {
  width: 250px;
}
</style>
