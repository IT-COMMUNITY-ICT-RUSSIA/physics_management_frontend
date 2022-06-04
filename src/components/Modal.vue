<template>
  <div class="modal" tabindex="-1" id="dModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ header }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <a v-if="!content.length">Тут пока ничего нет</a>
          <span v-else v-for="c in content" :key="c"
            ><b>{{ c[0] }}</b
            >: {{ c[1] }}<br
          /></span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="onClose()"
          >
            ОК
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="actionText && onAction"
            @click="onAction()"
          >
            {{ actionText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    content: Array,
    onClose: Function,
    actionText: String,
    onAction: Function,
  },
};
</script>

<style>
.modal {
  display: block;
}
</style>
