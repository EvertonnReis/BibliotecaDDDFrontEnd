<template>
  <div>
    <table>
      <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
      </tr>
      <tr v-for="aluno in alunos" :key="aluno.id">
        <td>{{ aluno.nome }}</td>
        <td>{{ aluno.sobrenome }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      alunos: []
    };
  },
  created() {
    axios.get('https://localhost:7127/api/aluno')
      .then(response => {
        this.alunos = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar alunos: ', error);
      });
  }
}
</script>

<style>
.container, .card {
  margin-top: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
}

.card-img-top {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>
