<script setup>
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="card in cards" :key="card.title">
        <div class="card">
          <img class="card-img-top" :src="card.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.text }}</p>
            <a href="#" class="btn btn-primary">Acessar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
}
</script>

<style>
.container, .card{
  margin-top: 20px;
}
.card{
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
}
.card-img-top{
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>
