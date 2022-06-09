<template>
  <!-- <div class="mb-3 text-center">
    <img src="logo.png" id="logo" />
  </div> -->
  <navbar />
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
        </p>
        <p class="h-custom text-center">Над проектом работали:</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <span v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8]" :key="i">
        <div class="col">
          <about-person :person="persons[i]" />
        </div>
      </span>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-auto align-self-center">
        <h1 class="text-center">Исходный код:</h1>
        <div class="row justify-content-center">
          <div class="col-md-auto align-self-center">
            <span class="sub-h">Open Source проекты факультета ИКТ</span>
            <a href="https://github.com/IT-COMMUNITY-ICT-RUSSIA" target="blank_"
              ><img id="icon" src="gh.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import AboutPerson from "../components/AboutPerson.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { AboutPerson, Navbar },
  methods: {
    countTextIndex() {
      setTimeout(() => {
        this.textIndex = (this.textIndex + 1) % 3;
        this.countTextIndex();
      }, 3000);
    },
  },
  data() {
    return {
      textIndex: 0,
      textItems: ["Вариант 1", "Вариант 2", "Вариант 3"],
      persons: [
        {
          name: "Тимофеев Николай",
          role: "Schedule Team Lead, Full-Stack",
          image: "timofeev",
          github: "https://github.com/timofeev41",
          telegram: "timofeev41",
          site: "https://linktr.ee/timofeev41",
          mail: "timofeevnik41@gmail.com",
        },
        {
          name: "Береза Никита",
          role: "Engine Team Lead, Backend",
          image: "bereza",
          telegram: "Just_Contest_It",
        },
        {
          name: "Барышева Зарина",
          role: "Schedule Team Frontend",
          image: "barysheva",
          telegram: "zemljanichka",
        },
        {
          name: "Кобелев Лев",
          role: "Schedule Team UI/UX Designer",
          image: "kobelev",
          github: "https://github.com/evlko",
        },
        {
          name: "Кормановская Дарина",
          role: "Schedule Team Frontend",
          image: "kormanovskaya",
          github: "https://github.com/eispoohw",
        },
        {
          name: "Савкин Владислав",
          role: "Engine Team Scripts",
          image: "savkin",
        },
        {
          name: "Еремеева Арина",
          role: "Schedule Team Artist",
          image: "eremeeva",
          mail: "9212470342@mail.ru",
          site: "https://spb.hh.ru/resume/8fbf1b79ff09b4110b0039ed1f634d4b686e59",
          telegram: "arinae_vaa",
        },
        {
          name: "Паргачевский Николай",
          role: "Engine Team Backend: Node-Red",
          image: "pargachevsky",
        },
        {
          name: "Борсов Никита",
          role: "Engine Team Developer",
          image: "borsov",
          telegram: "NikitaBorsov",
          mail: "NickBorsov@gmail.com",
        },
      ],
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
  font-size: 24px;
  margin-right: 10px;
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

#icon {
  width: 100px;
}
</style>
