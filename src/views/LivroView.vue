<script setup>
</script>

<template>
  <div>
    <button class="btn btn-primary">Adicionar Livro</button>
  </div>
  <div>
    <table class="custom-table">
      <thead>
        <tr>
          <th class="head-table">Título</th>
          <th class="head-table">Autor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.autor }}</td>
          <td>
            <button class="btn btn-success" @click="editarLivro(livro)">Editar</button>
            <button class="btn btn-danger" @click="excluirLivro(livro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      livros: []
    };
  },
  created() {
    axios.get('https://localhost:7127/api/livro')
      .then(response => {
        this.livros = response.data;
        console.log("Entrei!!");
        console.log(this.livros);
      })
      .catch(error => {
        console.error('Erro ao buscar livros: ', error);
      });
  },
  methods:{
    editarLivro(livro){
      console.log("Editei")
    },
    excluirLivro(livro){
      console.log("Exclui")
    }
  }
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
