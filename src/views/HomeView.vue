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
            <router-link :to="{ name: card.routeName }" class="btn btn-primary">Acessar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cards : [
    {
      title: "Livro",
      image: "src/img/livro.png",
      text: "Lista de livros",
      routeName: "livro"
    },
    {
      title: "Bibliotecaria",
      image: "src/img/bibliotecaria.png",
      text: "Lista de bibliotecárias",
      routeName: "bibliotecaria"
    },
    {
      title: "Empréstimo",
      image: "src/img/emprestimo.png",
      text: "Lista de empréstimos",
      routeName: "emprestimo"
    },
    {
      title: "Aluno",
      image: "src/img/aluno.png",
      text: "Lista de alunos",
      routeName: "aluno"
    },
  ]
};
  },
}
</script>

<style>
.container, .card{
  margin-top: 20px;
}
.card{
  border: 3px solid #ccc;
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
