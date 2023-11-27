<script setup>
</script>

<template>
  <div>
    <button class="btn btn-primary" @click="mostrarModal">Adicionar Empréstimo</button>
    <AdicionarEmprestimoModal ref="adicionarEmprestimoModal" />
  </div>
  <div>
    <table class="custom-table">
      <thead>
        <tr>
          <th class="head-table">ID</th>
          <th class="head-table">Aluno</th>
          <th class="head-table">Livro</th>
          <th class="head-table">Bibliotecaria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emprestimo in emprestimos" :key="emprestimo.emprestimoId">
          <td>{{ emprestimo.emprestimoId }}</td>
          <td>{{ emprestimo.alunoId }}</td>
          <td>{{ emprestimo.livroId }}</td>
          <td>{{ emprestimo.bibliotecariaId }}</td>
          <td>
            <button class="btn btn-success" @click="editarEmprestimo(emprestimo)">Editar</button>
            <button class="btn btn-danger" @click="excluirEmprestimo(emprestimo)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import AdicionarEmprestimoModal from '../components/AdicionarEmprestimoModal.vue';

export default {
  components: {
    AdicionarEmprestimoModal
  },
  data() {
    return {
      emprestimos: []
    };
  },
  created() {
    axios.get('https://localhost:7127/api/Emprestimo')
      .then(response => {
        this.emprestimos = response.data;
        console.log("Entrei!!");
        console.log(this.emprestimos);
      })
      .catch(error => {
        console.error('Erro ao buscar Emprestimos: ', error);
      });
  },
  methods: {
    mostrarModal() {
      // Lógica para mostrar o modal
      this.$refs.adicionarEmprestimoModal.mostrarModal();
    },
  }
}
</script>


<style>
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
}</style>
