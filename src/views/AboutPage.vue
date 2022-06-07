<template>
  <div class="mb-3 text-center">
    <img src="logo.png" id="logo" />
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-auto align-self-center">
        <p class="h-custom text-center">
          Кто мы такие.
          <br />
          Что тут забыли
          <a id="change-text">
            {{ textItems[textIndex] }}
          </a>
          . Продолжение текста
          <br />
          <br />
          Команда
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <span v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8]" :key="i"> 
        <div class="col">
          <about-person 
          :personName="personNames[i]"
          :personInfo="personRoles[i]"
          />
        </div>  
      </span>
    </div>
  </div>
</template>

<script>
import AboutPerson from "../components/AboutPerson.vue";

export default {
  components: { AboutPerson },
  methods: {
    countTextIndex() {
        setTimeout(() => {
          this.textIndex = (this.textIndex+1)%3;
          this.countTextIndex();
        }, 3000);
    },
  },
  data() {
    return {
      textIndex: 0,
      textItems: ["Вариант 1", "Вариант 2", "Вариант 3"],
      personNames: ["Тимофеев Николай", "Береза Никита", "Барышева Зарина", 
                    "Кобелев Лев", "Кормановская Дарина", "Савкин Владислав",
                    "Еремеева Арина", "Паргачевский Николай", "Борсов Никита"],
      personRoles: ["Что сделал человек 1", "Что сделал человек 2", "Что сделал человек 3",
                    "Что сделал человек 4", "Что сделал человек 5", "Что сделал человек 6",
                    "Что сделал человек 7", "Что сделал человек 8", "Что сделал человек 9"],
      /*personImages: [""],*/
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
