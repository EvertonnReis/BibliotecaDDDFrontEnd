<template>
  <div>
    <button @click="mostrarModal" class="btn btn-primary">Adicionar Aluno</button>
    <AdicionarAlunoModal @alunoAdicionado="alunoAdicionado" ref="adicionarAlunoModal" />
    <EditarAlunoModal ref="editarAlunoModal" />

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
              <button class="btn btn-success" @click="abrirModalEditar(aluno)">Editar</button>
              <button class="btn btn-danger" @click="excluirAluno(aluno)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AdicionarAlunoModal from '../components/AdicionarAlunoModal.vue';
import EditarAlunoModal from '../components/EditarAlunoModal.vue'; 

export default {
  components: {
    AdicionarAlunoModal,
    EditarAlunoModal
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
      })
      .catch(error => {
        console.error('Erro ao buscar alunos: ', error);
      });
  },
  methods: {
    abrirModalEditar(aluno) {
      this.$refs.editarAlunoModal.abrirModal(aluno);
    },
    mostrarModal() {
      this.$refs.adicionarAlunoModal.abrirModal();
    },
    alunoAdicionado(novoAluno) {
      console.log('Novo aluno adicionado:', novoAluno);
    },
    excluirAluno(aluno) {
      if (confirm('Tem certeza de que deseja excluir este aluno?')) {
        axios.delete(`https://localhost:7127/api/Aluno`, { data: aluno })
          .then(response => {
            console.log('Aluno excluído com sucesso:', response.data);
            this.carregarAlunos(); // Atualiza a lista de alunos após a exclusão
          })
          .catch(error => {
            console.error('Erro ao excluir aluno:', error);
          });
      }
    }
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
