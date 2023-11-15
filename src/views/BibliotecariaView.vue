<script setup>
</script>

<template>
  <div>
    <button class="btn btn-primary">Adicionar Bibliotecaria</button>
  </div>
  <div>
    <table class="custom-table">
      <thead>
        <tr>
          <th class="head-table">Nome</th>
          <th class="head-table">Sobrenome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bibliotecaria in bibliotecarias" :key="bibliotecaria.userId">
          <td>{{ bibliotecaria.nome }}</td>
          <td>{{ bibliotecaria.sobrenome }}</td>
          <td>
            <button class="btn btn-success" @click="editarBibliotecaria(bibliotecaria)">Editar</button>
            <button class="btn btn-danger" @click="excluirBibliotecaria(bibliotecaria)">Excluir</button>
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
      bibliotecarias: []
    };
  },
  created() {
    axios.get('https://localhost:7127/api/bibliotecaria')
      .then(response => {
        this.bibliotecarias = response.data;
        console.log("Entrei!!");
        console.log(this.bibliotecarias);
      })
      .catch(error => {
        console.error('Erro ao buscar bibliotecarias: ', error);
      });
  },
  methods:{
    editarBibliotecaria(){
      console.log("Editei")
    },
    excluirBibliotecaria(){
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
