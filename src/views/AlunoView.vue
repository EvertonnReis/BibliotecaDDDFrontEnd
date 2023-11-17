<template>
  <div>
    <button @click="mostrarModal" class="btn btn-primary">Adicionar Aluno</button>
    <AdicionarAlunoModal @alunoAdicionado="alunoAdicionado" ref="adicionarAlunoModal" />
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
        <tr v-for="aluno in alunos" :key="aluno.userId">
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.sobrenome }}</td>
          <td>
            <button class="btn btn-success" @click="editarAluno(aluno)">Editar</button>
            <button class="btn btn-danger" @click="excluirAluno(aluno)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import AdicionarAlunoModal from '../components/AdicionarAlunoModal.vue';

export default {
  components: {
    AdicionarAlunoModal
  },
  data() {
    return {
      alunos: []
    };
  },
  created() {
    axios.get('https://localhost:7127/api/aluno')
      .then(response => {
        this.alunos = response.data;
        console.log("Entrei!!");
        console.log(this.alunos);
      })
      .catch(error => {
        console.error('Erro ao buscar alunos: ', error);
      });
  },
  methods: {
    mostrarModal() {
      this.$refs.adicionarAlunoModal.abrirModal();
    },
    alunoAdicionado(novoAluno) {
      console.log('Novo aluno adicionado:', novoAluno);
    }
    // Adicione outros métodos conforme necessário
  }
};
</script>

<style>
.btn {
  margin: 10px;
}

.container,
.card {
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

/* TABELA */

.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}

.custom-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.custom-table tr:hover {
  background-color: #ddd;
}

.head-table {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
