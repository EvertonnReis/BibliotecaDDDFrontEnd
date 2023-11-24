<template>
  <div>
    <button @click="mostrarModalAdicionarLivro" class="btn btn-primary">Adicionar Livro</button>
    <AdicionarLivroModal @livroAdicionado="livroAdicionado" ref="adicionarLivroModal" />

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
  </div>
</template>

<script>
import axios from 'axios';
import AdicionarLivroModal from '../components/AdicionarLivroModal.vue';

export default {
  components: {
    AdicionarLivroModal,
  },
  data() {
    return {
      livros: []
    };
  },
  created() {
    this.carregarLivros();
  },
  methods: {
    carregarLivros() {
      axios.get('https://localhost:7127/api/livro')
        .then(response => {
          this.livros = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar livros: ', error);
        });
    },
    editarLivro(livro) {
      console.log("Editei", livro);
    },
    excluirLivro(livro) {
      console.log("Exclui", livro);
    },
    mostrarModalAdicionarLivro() {
      this.$refs.adicionarLivroModal.abrirModal();
    },
    livroAdicionado(novoLivro) {
      console.log('Novo livro adicionado:', novoLivro);
      this.carregarLivros(); // Atualiza a lista de livros após a adição do novo livro
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
