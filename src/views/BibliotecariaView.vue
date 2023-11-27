<template>
  <div>
    <button @click="mostrarModalAdicionarBibliotecaria" class="btn btn-primary">Adicionar Bibliotecária</button>
    <AdicionarBibliotecariaModal @bibliotecariaAdicionada="bibliotecariaAdicionada" ref="adicionarBibliotecariaModal" />
    <EditarBibliotecariaModal ref="editarBibliotecariaModal" />

    <div>
      <table class="custom-table">
        <thead>
          <tr>
            <th class="head-table">ID</th>
            <th class="head-table">Nome</th>
            <th class="head-table">Sobrenome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bibliotecaria in bibliotecarias" :key="bibliotecaria.userId">
            <td>{{ bibliotecaria.userId }}</td>
            <td>{{ bibliotecaria.nome }}</td>
            <td>{{ bibliotecaria.sobrenome }}</td>
            <td>
              <button class="btn btn-success" @click="abrirModalEditar(bibliotecaria)">Editar</button>
              <button class="btn btn-danger" @click="excluirBibliotecaria(bibliotecaria)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AdicionarBibliotecariaModal from '../components/AdicionarBibliotecariaModal.vue';
import EditarBibliotecariaModal from '../components/EditarBibliotecariaModal.vue';

export default {
  components: {
    AdicionarBibliotecariaModal,
    EditarBibliotecariaModal,
  },
  data() {
    return {
      bibliotecarias: []
    };
  },
  created() {
    this.carregarBibliotecarias();
  },
  methods: {
    carregarBibliotecarias() {
      axios.get('https://localhost:7127/api/bibliotecaria')
        .then(response => {
          this.bibliotecarias = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar bibliotecárias: ', error);
        });
    },
    abrirModalEditar(bibliotecaria) {
      this.$refs.editarBibliotecariaModal.abrirModal(bibliotecaria);
    },
    excluirBibliotecaria(bibliotecaria) {
      if (confirm('Tem certeza de que deseja excluir esta bibliotecária?')) {
        axios.delete(`https://localhost:7127/api/Bibliotecaria/${bibliotecaria.userId}`)
          .then(response => {
            console.log('Bibliotecária excluída com sucesso:', response.data);
            this.carregarBibliotecarias();
          })
          .catch(error => {
            console.error('Erro ao excluir bibliotecária:', error);
          });
      }
    },
    mostrarModalAdicionarBibliotecaria() {
      this.$refs.adicionarBibliotecariaModal.abrirModal();
    },
    bibliotecariaAdicionada(novaBibliotecaria) {
      console.log('Nova bibliotecária adicionada:', novaBibliotecaria);
      this.carregarBibliotecarias();
    }
  }
};
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
}
</style>
