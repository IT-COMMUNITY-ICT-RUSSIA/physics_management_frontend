<template>
    <div class="card text-center" id="card">
        <img :src="personAvatar" id="img">
        <div class="card-body">
          <h5 class="card-title">{{ personName }}</h5>
          <p class="card-text" style="height: 100px">{{ personInfo }}</p>
        </div>
      </div>
</template>

<script>
export default {
    props: {
        personName: "",
        personInfo: "",
        personImg: "",
    },
    computed: {
        personAvatar() {
        return this.personImg
            ? this.personImg
            : `https://st.depositphotos.com/2024219/3404/v/950/depositphotos_34046177-stock-illustration-silhouette-of-business-man-with.jpg`;
        },
    }
};
</script>

<style>
#card {
    margin-bottom: 20px;
    border: 3px solid;
    border-color: #2e4ba5;
}

#img {
    margin: 5px;
}
</style>
