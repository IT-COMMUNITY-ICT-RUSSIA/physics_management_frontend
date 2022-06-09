<template>
  <div class="card text-center" id="card">
    <img :src="personAvatar" id="img" />
    <div class="card-body">
      <h5 class="card-title">{{ person.name }}</h5>
      <p class="card-text" style="min-height: 100px; max-height: 100px">
        {{ person.role }} 
        <br />
        {{ person.info }}
        <br />
        <span v-if="person.github">
          <a :href="person.github" target="_blank"
            ><img id="integration" src="/gh.png"
          /></a>
        </span>
        <span v-if="person.telegram">
          <a :href="'https://t.me/' + person.telegram" target="_blank"
            ><img id="integration" src="/tg.png"
          /></a>
        </span>
        <span v-if="person.site">
          <a :href="person.site" target="_blank"
            ><img id="integration" src="/ws.png"
          /></a>
        </span>
        <span v-if="person.mail">
          <a :href="'mailto:' + person.mail" target="_blank"
            ><img id="integration" src="/mail.png"
          /></a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object,
  },
  computed: {
    personAvatar() {
      return this.person.image
        ? `/person/${this.person.image}.jpg`
        : `https://st.depositphotos.com/2024219/3404/v/950/depositphotos_34046177-stock-illustration-silhouette-of-business-man-with.jpg`;
    },
  },
};
</script>

<style>
#card {
  margin-bottom: 20px;
  /* border: 3px solid; */
  /* border-color: #2e4ba5; */
  border-color: white !important;
}

#img {
  margin: auto;
  height: 300px;
  width: 300px;
  display: block;
}

#integration {
  width: 35px;
  margin-top: 10px;
  margin-right: 3px;
}
</style>
