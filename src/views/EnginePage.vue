<template>
  <div class="container">
    <div class="row">
      <modal
        :header="'Статус установки'"
        :content="Object.entries(statusData)"
        :onClose="
          () => {
            status = false;
          }
        "
        v-if="status"
      />
      <modal
        v-if="debug"
        :header="'Debug log'"
        :content="events"
        :onClose="
          () => {
            debug = false;
          }
        "
        :actionText="'Очистить'"
        :onAction="
          () => {
            events = [];
          }
        "
      />
      <div class="row" id="first">
        <p class="text-center h-custom">УСТАНОВКА №1</p>
      </div>
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item text-center">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Управление питанием
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body d-grid gap-2">
                  <button type="button" class="btn btn-success" @click="beep">
                    Включить установку
                  </button>
                  <button type="button" class="btn btn-danger" @click="beep">
                    Выключить установку
                  </button>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Управление координатами
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body text-center d-grid gap-2">
                  <label for="customRange1" class="form-label"
                    >Частота ({{ freq }})</label
                  >
                  <input
                    type="range"
                    class="form-range"
                    id="customRange1"
                    min="0"
                    max="255"
                    :value="freq"
                    @input="(event) => (freq = event.target.value)"
                  />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Тестовый функционал
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body text-center d-grid gap-2">
                  <button
                    type="button"
                    id="mButton"
                    class="btn btn-info"
                    @click="beep"
                  >
                    Проиграть звук
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="debug = true"
                  >
                    Debug info
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="handleStatus"
                  >
                    Статус установки
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col align-content-center">
          Stream
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      debug: false,
      status: false,
      statusData: null,
      freq: 0,
      events: [],
    };
  },
  methods: {
    beep() {
      this.handleEvent("called beep");
      axios.get("http://192.168.192.126:1880/setup/music");
    },
    handleEvent(event) {
      this.events.push(["Событие", event]);
    },
    handleStatus() {
      this.handleEvent("received status");
      axios.get("http://192.168.192.126:1880/setup/status").then((res) => {
        this.status = true;
        console.log("Статус установки - " + res);
        this.statusData = res.data;
      });
    },
  },
};
</script>

<style scoped>
#first {
  padding-top: 25px;
}
.h-custom {
  color: var(--main-font-color);
  font-size: 32px;
}
.sub-h {
  color: var(--main-font-color);
  font-size: 16px;
  padding-bottom: 0px;
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
</style>
